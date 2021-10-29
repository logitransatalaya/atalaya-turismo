from django.db import models
from django.db.models.base import Model

""" Creamos los modelos """

class Plan(models.Model):
    """ Modelo para los planes """
    destination_name = models.CharField(max_length=250, blank=False)
    description = models.CharField(max_length=255)
    url_img_card = models.URLField(max_length=250)

    def __str__(self):
        return self.destination_name

class PhotosPlans(models.Model):
    """ Modelo de las fotos para cada plan """
    plan = models.ForeignKey(Plan,related_name='photos', on_delete=models.CASCADE, null=True)
    name_img = models.CharField(max_length=255, blank=False)
    url_img = models.URLField(max_length=255, blank=False)
    def __str__(self):
        return self.name_img

class IncludesPlan(models.Model):
    """ Modelo de lo que icluye el plan """
    plan = models.ForeignKey(Plan,related_name='includes', on_delete=models.CASCADE, null=True)
    includes_description = models.CharField(max_length=255)
    def __str__(self):
        return self.includes_description


class NoInclude(models.Model):
    """ Modelos para lo que no incluye el plan """
    plan = models.ForeignKey(Plan,related_name='noIncludes', on_delete=models.CASCADE, null=True)
    noIncludes_description = models.CharField(max_length=255)
    def __str__(self):
        return self.noIncludes_description

class Notes(models.Model):
    """ Modelos para las notas del plan  """
    plan = models.ForeignKey(Plan,related_name='notes', on_delete=models.CASCADE, null=True)
    note = models.CharField(max_length=255)
    



