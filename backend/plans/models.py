from django.db import models

""" Creamos los modelos """

class Plan(models.Model):
    """  """
    destination_name = models.CharField(max_length=250, blank=False)
    description = models.CharField(max_length=255)
    url_img_card = models.URLField(max_length=250)
    def __str__(self):
        return self.destination_name

class PhotosPlans(models.Model):
    """  """
    id_plans = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True)
    name_img = models.CharField(max_length=255, blank=False)
    url_img = models.URLField(max_length=255, blank=False)
    
    def __str__(self):
        return self.name_img
