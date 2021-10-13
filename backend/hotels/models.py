from os import name
from typing import Tuple
from django.db import models
from django.db.models.fields.related import OneToOneField
from rest_framework.fields import flatten_choices_dict

class National_city(models.Model):
    city = models.CharField(max_length=150, blank=False, default='Medellin')
    city_img = models.URLField(max_length=250, blank=False, default='')
    def __str__(self):
        return self.city


class Hotel(models.Model):
    id_city = models.ForeignKey(National_city, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=100, blank=False)
    price = models.PositiveIntegerField()
    address = models.CharField(max_length=150)
    urlImg = models.URLField(max_length=250, blank=False)
    stars = models.PositiveIntegerField()
    # Pending Remove
    description = models.CharField(max_length=250)

    def __str__(self):
        template = f'{self.name} - {self.id_city.city}'
        return template.format(self)

class Service(models.Model):
    id_hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    services = models.CharField(max_length=200)

    def __str__(self):
        template = f'{self.services} - {self.id_hotel.name}'
        return template.format(self)

class Photos(models.Model):
    id_hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    main_1 = models.URLField(max_length=250)
    main_2 = models.URLField(max_length=250)
    main_3 = models.URLField(max_length=250)
    main_4 = models.URLField(max_length=250)
    hab_1 = models.URLField(max_length=250)
    hab_2 = models.URLField(max_length=250)
    hab_3 = models.URLField(max_length=250)
    hab_4 = models.URLField(max_length=250)
    hab_5 = models.URLField(max_length=250)

    def __str__(self):
        template = f'Photos of {self.id_hotel.name} from {self.id_hotel.id_city.city}'
        return template.format(self)

class Review(models.Model):
    id_hotel = models.ForeignKey(Hotel, on_delete=models.DO_NOTHING)
    user = models.CharField(max_length=100)
    review_text = models.CharField(max_length=500)
 
    def __str__(self):
        template = f'Review of {self.id_hotel.name} from {self.id_hotel.id_city.city}'
        return template.format(self)