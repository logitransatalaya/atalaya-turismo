from django.db.models import fields
from rest_framework import serializers
from .models import Hotel, National_city, Review

class CitySerializer(serializers.Serializer):
    
    class Meta:
        model = National_city
        fields = ('city')

class HotelSerializer(serializers.Serializer):

    class Meta:
        model = Hotel
        fields = ('__all__')

class PhotosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hotel
        fields = ('__all__')

class reviewSerializer(serializers.Serializer):
    class Meta:
        model = Review
        fields = '__all__'

class CityIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = National_city
        fields = ('__all__')
