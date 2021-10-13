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
        fields = ['services']

class PhotosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photos
        fields = ('main_1','main_2','main_3', 'main_4', 'hab_1', 'hab_2', 'hab_3', 'hab_4', 'hab_5')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('user','review_text')

class CityIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = National_city
        fields = ('__all__')


        
