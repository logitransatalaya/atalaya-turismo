from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CitySerializer

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

