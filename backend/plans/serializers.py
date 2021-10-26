from rest_framework import serializers
from .models import  Plan,PhotosPlans,IncludesPlan,NoInclude,Notes


class PlanSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Plan
        fields = ['id', 'destination_name', 'url_img_card', 'description']
        # fields = ('__all__')

class PhotosPlansSerializer(serializers.ModelSerializer):

    class Meta:
        model = PhotosPlans
        fields = ('__all__')

class IncludesPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = IncludesPlan
        fields = ('__all__')

class NoIncludeSerializer(serializers.ModelSerializer):

    class Meta:
        model = NoInclude
        fields = ('__all__')
        

class NotesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notes
        fields = ('__all__')
        