from django.db.models import fields
from rest_framework import serializers
from .models import Offers,Photos,NoIncludes,Services


class PhotosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = NoIncludes
        fields = ('__all__')

class ServiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Services
        fields = ('__all__')

class NoIncludeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Photos
        fields = ('__all__')

class OffersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Offers
        fields = ('__all__')
