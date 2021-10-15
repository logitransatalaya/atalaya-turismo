from django.db.models import fields
from rest_framework import serializers
from .models import Destination, Plan, Photos_destination, Include_plan, No_include, Notes

class DestinationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = ('__all__')

class PlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plan
        fields = ('__all__')

class PhotosDestinationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photos_destination
        fields = ('__all__')

class IncludePlanSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Include_plan
        fields = ['include']

class NoIncludeSerializer(serializers.ModelSerializer):

    class Meta:
        model = No_include
        fields = ['no_include']

class NotesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Notes
        fields = ['note'] 