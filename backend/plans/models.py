from django.db import models

# Create your models here.

class Destination(models.Model): 
    destination = models.CharField(max_length=150, blank=False)
    destination_img = models.CharField(max_length=250, blank=False)
    def __str__(self):
        return self.destination

class Plan(models.Model):
    id_destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    destination_name = models.CharField(max_length=150,blank=False),
    urlImg = models.URLField(max_length=250, blank=False),
    description = models.CharField(max_length=250)

    def __str__(self):
        template = self.destination_name
        return template.format(self)

class Photos_destination(models.Model):
    id_plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    altImg = models.CharField(max_length=50)
    urlImg = models.URLField(max_length=250, blank=False)

    def __str__(self):
        template = f'Photos of {self.id_plan.destination_name}'
        return template.format()

class Include_plan(models.Model):
    id_plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    include = models.CharField(max_length=150)

class No_include(models.Model):
    id_plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    no_include = models.CharField(max_length=150)

class Notes(models.Model):
    id_plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    note = models.CharField(max_length=250)