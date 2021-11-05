from rest_framework import serializers
from .models import City, Hotel, Comments, Photos_outside, Photos_inside, Services, Services_hotel

class ServiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Services
        fields = ('__all__')


class CitySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = City
        fields = ('__all__')

class CityIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ('__all__')

class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = ('__all__')

class PhotosOutsideSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photos_outside
        fields = ('__all__')

class PhotosInsideSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photos_inside
        fields = ('__all__')

class ServicesHotelSerializer(serializers.ModelSerializer):

    #id_service = serializers.StringRelatedField()
    id_service = ServiceSerializer()

    class Meta:
        model = Services_hotel
        fields = ('__all__')



class HotelSerializer(serializers.ModelSerializer):
    comments = CommentsSerializer(many=True)
    photos_outside = PhotosOutsideSerializer(many=True)
    photos_inside = PhotosInsideSerializer(many=True)
    services_hotel = ServicesHotelSerializer(many=True)
    
    class Meta:
        model = Hotel
        fields = ['id','addres', 'id_city', 'name', 'stars', 'price', 'description', 'url_img', 'comments', 'photos_outside', 'photos_inside', 'services_hotel']
