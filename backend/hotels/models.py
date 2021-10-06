# from django.db import models
from djongo import models
from django.db.models import (Field, Manager, Model)
import typing
from django import forms


class MongoField(Field):
    empty_strings_allowed = False

class EmbeddedField(MongoField):
    def __init__(self,
        model_container: typing.Type[Model],
        model_form_class: typing.Type[forms.ModelForm] = None,
        model_form_kwargs: dict = None,
        *args, **kwargs):
        return None



# Create your models here.
class National_location(models.Model):
    location = models.CharField(max_length=150)
