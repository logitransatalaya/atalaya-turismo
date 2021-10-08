from django.db import models

class National_city(models.Model):
    city = models.CharField(max_length=150)

    def __str__(self):
        return self.city



