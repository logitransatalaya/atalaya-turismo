from rest_framework import serializers
from .models import  IncludeColumnTwo, Tours,IncludeColumnOne

class IncludeSerializer(serializers.ModelSerializer):

    class Meta:
        model = IncludeColumnOne
        fields = ['text_include']

class IncludeTwoSerializer(serializers.ModelSerializer):

    class Meta:
        model = IncludeColumnTwo
        fields = ['text_include_two']

class ToursSerializer(serializers.ModelSerializer):

    include = IncludeSerializer(many=True)
    text_include_two = IncludeTwoSerializer(many=True) 
    class Meta:
        model = Tours
        fields = ['id', 'title', 'url_img_card', 'url_image_description','description','unique', 'include','text_include_two']
        
