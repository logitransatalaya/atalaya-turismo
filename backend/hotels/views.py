from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CityIdSerializer, CitySerializer, HotelSerializer, PhotosSerializer

from .models import Hotel, National_city, Service

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

    return Response({
        'cities': serializer.data
    })

@api_view(['GET'])
def hotels(request):


    city = National_city.objects.filter(city__iexact='medellin')
    city_id_serializer = CityIdSerializer(city, many=True)
    cityId = city_id_serializer.data[0]['id']

    hotels = Hotel.objects.filter(id_city=cityId)

    serializer = HotelSerializer(hotels, many=True)

    return Response({
            'hotels' : serializer.data
        }
    )

@api_view(['GET'])
def hotel(request, pk):

    hotel = Hotel.objects.filter(id=pk)
    serializer_hotel = HotelSerializer(hotel, many=True)

    hotel_id = serializer_hotel.data
    print(hotel_id)
    
    service = Service.objects.all()
    serializer = HotelSerializer(hotel, many=True)

    return Response({
        'Testing': serializer_hotel.data
    })



