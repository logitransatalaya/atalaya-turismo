
from os import name
from django.db import models
from hotels.models import Hotel
from django.core.exceptions import ValidationError

# Create your models here.

""" Creamos el modelo que ira en la base de datos """
class Offers(models.Model):
    """ relacion entre tabla Hoteles y Offers """
    id_Hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    from_date = models.DateField()
    to_date = models.DateField()
    """ Que el precio no ingrese en blanco"""
    price = models.BigIntegerField(blank=False)
    Hotel = models.CharField(max_length=250)
    url_code = models.CharField(max_length=250)

    """ convertir el modelo a string """
    def __str__(self):
        """  """
        template = f'{self.id_Hotel} - {self.name}- {self.from_date}- {self.to_date}'
        return template.format(self)


class Photos(models.Model):
    id_offer = models.ForeignKey(Offers,on_delete=models.CASCADE)
    url_img = models.URLField(max_length=250)

class Services(models.Model):
    """ Modelo de servicios de oferta """
    id_offer = models.ForeignKey(Offers, on_delete=models.CASCADE)
    Description_service = models.CharField(max_length=250)


class NoIncludes(models.Model):
    """ Modelo no includes """
    id_offer = models.ForeignKey(Offers, on_delete=models.CASCADE)
    Description_no_include = models.CharField(max_length=250)
