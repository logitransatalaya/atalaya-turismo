from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OffersSerializer
from .models import Offers
import json
from collections import OrderedDict

# Create your views here.
@api_view(['GET'])
def cityList(request):

    cities = Offers.objects.all()
    serializer = OffersSerializer(cities, many=True)

    return Response({
        'cities': serializer.data
    })