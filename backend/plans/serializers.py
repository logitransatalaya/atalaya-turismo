from django.db.models import fields
from rest_framework import serializers
from .models import  Plan,PhotosPlans


class PhotosPlansSerializer(serializers.ModelSerializer):

    class Meta:
        model = PhotosPlans
        fields = ('__all__')

class PlanSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Plan
        fields = ['id', 'destination_name', 'url_img_card', 'description']
        # fields = ('__all__')


