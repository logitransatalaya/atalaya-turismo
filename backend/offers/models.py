
from os import name
from typing import Tuple
from django.db import models
from django.db.models.base import Model
from django.db.models.fields.related import OneToOneField
from rest_framework.fields import flatten_choices_dict
from hotels.models import Hotel


# Create your models here.

""" Creamos el modelo que ira en la base de datos """
class Offers(models.Model):
    """ relacion entre tabla Hoteles y Offers """
    id_Hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    from_date = models.CharField(max_length=250)
    to_date = models.CharField(max_length=250)
    """ Que el precio no ingrese en blanco"""
    price = models.BigIntegerField(blank=False)
    Hotel = models.CharField(max_length=250)
    url_code = models.CharField(max_length=250)

    """ convertir el modelo a string """
    def __str__(self):
        """  """
        template = f'{self.id_Hotel} - {self.name}- {self.from_date}- {self.to_date}'
        return template.format(self)


