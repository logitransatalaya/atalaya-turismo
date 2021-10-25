from django.db.models import fields
from rest_framework import serializers
from .models import Destination, Plan,PhotosPlans

class DestinationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = ('__all__')

class PhotosPlansSerializer(serializers.ModelSerializer):

    class Meta:
        model = PhotosPlans
        fields = ('__all__')

class PlanSerializer(serializers.ModelSerializer):

    id_destination = DestinationSerializer()
    id_photos = PhotosPlansSerializer()
    class Meta: 
        model = Plan
        fields = ['id', 'destination_name', 'url_img', 'description', 'id_destination','id_photos']
        # fields = ('__all__')


