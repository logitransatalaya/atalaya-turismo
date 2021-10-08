from django.db.models import query
from django.shortcuts import render
from .models import National_city
from rest_framework import generics
from .serializers import National_city_serializer
from backend.hotels import serializers

serializer_class = National_city_serializer


class National_city_serializer(generics.CreateAPIView):
    # API endpoint that allows creation of a new city
    queryset = National_city.objects.all()
    serializers = National_city_serializer


class National_city_list(generics.ListAPIView):
    # API endpoint that allows customer to be viewed
    queryset = National_city.objects.all()
    serializers_class = National_city_serializer

class National_city_detail(generics.RetrieveAPIView):
    # API endpoint that return a single city by pk
    queryset = National_city.objects.all()

class National_city_update(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a city record to be updated
    queryset = National_city.objects.all()

class National_city_delete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a city record to be deleted
    queryset = National_city.objects.all()