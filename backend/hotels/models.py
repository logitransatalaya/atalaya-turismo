from django.db import models
from django.db.models.fields import NullBooleanField

# Create your models here.

ONE = '1'
TWO = '2'
THREE = '3'
FOUR = '4'
NULL = 'null'

POSITION_CHOICES = (
    (ONE, '1'),
    (TWO, '2'),
    (THREE, '3'),
    (FOUR, '4'),
    (NULL, 'Nulo')
)


class City(models.Model):
    name= models.CharField(max_length=100)
    url_img= models.URLField(max_length=255)

    def __str__(self):
        return self.name

class Services(models.Model):
    name_service = models.CharField(max_length=100)
    text_service = models.CharField(max_length=100)

    def __str__(self):
        return self.name_service

class Hotel(models.Model):
    id_city= models.ForeignKey(City, on_delete=models.CASCADE)
    name= models.CharField(max_length=100)
    stars= models.PositiveIntegerField()
    price= models.PositiveIntegerField()
    description= models.TextField()
    addres = models.CharField(max_length=255)
    url_img= models.URLField(max_length=255)
    addres_hotel = models.CharField(max_length=255)
    

    def __str__(self):
        return self.name

class Comments(models.Model):
    id_hotel= models.ForeignKey(Hotel, related_name="comments",on_delete=models.CASCADE)
    user_name= models.CharField(max_length=100)
    content= models.TextField(max_length=400)

    def __str__(self):
        template = f'{self.user_name} - comentario - {self.id_hotel.name}'
        return template

class Photos_outside(models.Model):
    id_hotel= models.ForeignKey(Hotel, related_name="photos_outside", on_delete=models.CASCADE)
    url_img= models.URLField(max_length=255)
    name_img= models.CharField(max_length=50)

    def __str__(self):
        template = f'fotos facha de {self.id_hotel.name}'
        return template

class Photos_inside(models.Model):
    id_hotel= models.ForeignKey(Hotel, related_name="photos_inside", on_delete=models.CASCADE)
    url_img= models.URLField(max_length=255)
    name_img= models.CharField(max_length=50)
    position= models.CharField(max_length=4, 
                choices=POSITION_CHOICES,
                default='Nulo') 

    def __str__(self):
        template = f'fotos habitaciones de {self.id_hotel.name}'
        return template

class Services_hotel(models.Model):
    id_hotel= models.ForeignKey(Hotel, related_name="services_hotel", on_delete=models.CASCADE)
    id_service= models.ForeignKey(Services, on_delete=models.CASCADE)

    def __str__(self):
        template = f'servicio de {self.id_service.name_service} del hotel {self.id_hotel.name}'
        return template