from django.db.models import fields
from rest_framework import serializers
from .models import Hotel, National_city, Review

class CitySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = National_city
        fields = ('__all__')

class HotelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hotel
        fields = ('__all__')

class PhotosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hotel
        fields = ('__all__')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class CityIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = National_city
        fields = ('__all__')

    # result = serializers.SerializerMethodField()
    # def get_result(self, obj):
    #     return obj.result
        
