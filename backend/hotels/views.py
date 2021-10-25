from django.shortcuts import render
from django.http import JsonResponse
from django.urls.resolvers import LocaleRegexDescriptor
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CityIdSerializer, CitySerializer, HotelSerializer, PhotosSerializer, ReviewSerializer, ServiceSerializer

from .models import Hotel, National_city, Service, Photos, Review

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
def hotels(request, name):
    print('holaaa')
    print(name)
    city = National_city.objects.filter(city__iexact=name)
    city_id_serializer = CityIdSerializer(city, many=True)
    cityId = city_id_serializer.data[0]['id']

    hotels = Hotel.objects.filter(id_city=cityId)

    serializer = HotelSerializer(hotels, many=True)

    return Response({
            'hotels' : serializer.data
        }
    )

@api_view(['GET'])
def hotel(request, name, pk):

    city = National_city.objects.filter(city__iexact=name)
    serializer_city = CitySerializer(city, many=True)

    hotel = Hotel.objects.filter(id=pk, id_city=serializer_city.data[0]['id'])
    serializer_hotel = HotelSerializer(hotel, many=True)

    service = Service.objects.filter(id_hotel=pk)
    serializer_service = ServiceSerializer(service, many=True)

    photos = Photos.objects.filter(id_hotel=pk)
    serializer_photos = PhotosSerializer(photos, many=True)

    review = Review.objects.filter(id_hotel=pk)
    serializer_review = ReviewSerializer(review, many=True)

    return Response({
        'hotel': serializer_hotel.data,
        'more' : {
            'services': serializer_service.data,
            'photos': {
                'photos1': serializer_photos.data,
            },
            'reviews': serializer_review.data
        }
    })



