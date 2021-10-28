from rest_framework import serializers
from .models import  Tours,IncludeColumnOne

# class TouSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Tours
#         fields = ['title']

class IncludeSerializer(serializers.ModelSerializer):
    # title = TouSerializer(many=True)

    class Meta:
        model = IncludeColumnOne
        fields = ['text_include']
        #fields = ('__all__')

        
class ToursSerializer(serializers.ModelSerializer):

    include = IncludeSerializer(many=True)
    class Meta:
        model = Tours
        fields = ['id', 'title', 'url_img_card', 'url_image_description','description','unique', 'include']
        
