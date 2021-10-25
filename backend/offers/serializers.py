from django.db.models import fields
from rest_framework import serializers
from .models import Offers

class OffersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Offers
        fields = ('__all__')