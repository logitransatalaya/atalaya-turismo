from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CityIdSerializer, CitySerializer, HotelSerializer, PhotosSerializer

from .models import Hotel, National_city

import json

from collections import OrderedDict

@api_view(['GET'])
def apiOverView(request):
    test = {
        'test': 'test'
    
    }
    return Response(test)

@api_view(['GET'])
def cityList(request):
    cities = National_city.objects.all()
    serializer = CitySerializer(cities, many=True)
    print(serializer.data)
    return Response({
        'cities': serializer.data
    })

@api_view(['GET'])
def hotels(request):

    city = National_city.objects.filter(city__iexact=request.query_params['city'])
    cityIdSerializer = CityIdSerializer(city, many=True)
    cityId = cityIdSerializer.data[0]['id']

    hotels = Hotel.objects.filter(hotel_city=cityId)

    serializer = HotelSerializer(hotels, many=True)
    serializerPhotos = PhotosSerializer(hotels, many=True)


    return Response({
            'hotels' : serializer.data
        }
    )

