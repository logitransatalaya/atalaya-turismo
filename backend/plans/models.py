from django.db import models

""" Creamos los modelos """

class Destination(models.Model): 
    destination = models.CharField(max_length=255, blank=False)
    url_image = models.CharField(max_length=250, blank=False)
    """ retorna los valores en un string """
    def __str__(self):
        return self.destination

 

        
class PhotosPlans(models.Model):
    """hola mundo"""
    name_img = models.CharField(max_length=255, blank=False)
    url_img = models.URLField(max_length=255, blank=False)

class Plan(models.Model):
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    destination_name = models.CharField(max_length=250, blank=False)
    description = models.CharField(max_length=255)
    url_img = models.URLField(max_length=250)
    id_photos = models.ForeignKey(PhotosPlans, on_delete=models.CASCADE, null=True )
    def __str__(self):
        return self.destination_name
