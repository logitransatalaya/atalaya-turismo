from django.db.models import fields
from rest_framework import serializers
from .models import Hotel, National_city, Review, Photos, Service

class CitySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = National_city
        fields = ('__all__')

class HotelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hotel
        fields = ('__all__')

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model =  Service
        fields = ('__all__')

class PhotosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photos
        fields = ('__all__')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class CityIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = National_city
        fields = ('__all__')


        
