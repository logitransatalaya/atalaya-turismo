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
    hotel_city = models.ForeignKey(National_city, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=100, blank=False)
    stars = models.PositiveIntegerField()
    main_1 = models.URLField(max_length=250)
    main_2 = models.URLField(max_length=250)
    main_3 = models.URLField(max_length=250)
    main_4 = models.URLField(max_length=250)
    services = models.CharField(max_length=200)
    hab_1 = models.URLField(max_length=250)
    hab_2 = models.URLField(max_length=250)
    hab_3 = models.URLField(max_length=250)
    hab_4 = models.URLField(max_length=250)
    hab_5 = models.URLField(max_length=250)
    description = models.CharField(max_length=250)

class Review(models.Model):
    review_hotel = models.ForeignKey(Hotel, on_delete=models.DO_NOTHING)
    user = models.CharField(max_length=100)
    review_text = models.CharField(max_length=500)
 