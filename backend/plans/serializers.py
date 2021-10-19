from django.db.models import fields
from rest_framework import serializers
from .models import Destination, Plan

class DestinationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = ('__all__')

class PlanSerializer(serializers.ModelSerializer):

    id_destination = DestinationSerializer()
    class Meta: 
        model = Plan
        fields = ['id', 'destination_name', 'urlImg', 'description', 'id_destination']

