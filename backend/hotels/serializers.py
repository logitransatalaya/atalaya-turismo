from django.db.models import fields
from rest_framework import serializers
from .models import National_city

class National_city_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = National_city
        fields = ['city']

