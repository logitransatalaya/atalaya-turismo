from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CityIdSerializer, CitySerializer, HotelSerializer

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
    print(cities)
    return Response({
        'cities': serializer.data
    })

@api_view(['GET'])
def hotels(request):
    city = National_city.objects.filter(city__iexact=request.query_params['city'])
    cityIdSerializer = CityIdSerializer(city, many=True)
    print(cityIdSerializer.data[0]['id'])
    hotels = Hotel.objects.all()
    # hotels = Hotel.objects.filter(hotel_city=city)
    serializer = HotelSerializer(hotels, many=True)
    return Response({
        'hotel' : cityIdSerializer.data[0]['id']
    })

