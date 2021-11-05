
from django.db import models
from django.db.models.base import Model

# Create your models here.

""" Creamos los modelos """
class Tours(models.Model):
    """ Modelo para los toures """
    title = models.CharField(max_length=250, blank=False)
    url_img_card = models.URLField(max_length=250)
    url_image_description = models.URLField(max_length=250)
    description = models.CharField(max_length=250, blank=False)
    unique = models.CharField(max_length=250, blank=False)
    
    def __str__(self):
        return self.title

class IncludeColumnOne(models.Model):
    """ Modelo para lo que incluye """
    id_tour = models.ForeignKey(Tours, related_name='include', on_delete=models.CASCADE)
    text_include = models.CharField(max_length=250, blank=False )

class IncludeColumnTwo(models.Model):
    """ Modelo para lo que incluye """
    id_tour = models.ForeignKey(Tours, related_name='text_include_two', on_delete=models.CASCADE)
    text_include_two = models.CharField(max_length=250, blank=False )
