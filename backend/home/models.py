from django.db import models

# Create your models here.

class HomeBanner(models.Model):
    name = models.CharField(max_length=255)
    web_home_banner = models.URLField(max_length=300)
    mobile_home_banner = models.URLField(max_length=300)
    description = models.CharField(max_length=255, null=False, default='Imagen')

    def __str__(self):
        return self.name        