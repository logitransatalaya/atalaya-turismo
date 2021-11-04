from django.db.models import fields
from rest_framework import serializers
from .models import Offers,Photos,NoIncludes,Services


class PhotosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Photos
        fields = ['url_img','name_img']

class ServiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Services
        fields = ['Description_service']

class NoIncludeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = NoIncludes
        fields = ['Description_no_include']

class OffersSerializer(serializers.ModelSerializer):
    photos = PhotosSerializer(many=True)
    services = ServiceSerializer(many=True)
    noincludes = NoIncludeSerializer(many=True)
    class Meta:
        model = Offers
        fields = ['id','name','from_date','to_date','price','Hotel','photos','services','noincludes']
