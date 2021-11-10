
from os import name
from django.db import models
# Create your models here.

class Offersflash(models.Model):
    """ Modelo no includes """
    url_img = models.URLField(max_length=250)
    title = models.CharField(max_length=250)
    cop = models.BigIntegerField(max_length=250)

