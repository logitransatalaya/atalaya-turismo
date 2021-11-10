from django.db.models import fields
from rest_framework import serializers
from .models import Offersflash


class OffersFlashSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Offersflash
        fields = ('__all__')