from django.db import models

# Create your models here.

class Cities(models.Model):
    name = models.CharField(max_length=150, blank=False)
    city_img = models.URLField(max_length=250, blank=False)
    def __str__(self):
        return self.name
