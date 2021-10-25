# from .serializers import DestinationSerializer, PlanSerializer
# from .models import Destination, Plan
# from rest_framework.viewsets import ModelViewSet
# Create your views here.

# class DestinationViewSet(ModelViewSet):
#     serializer_class = DestinationSerializer
#     queryset = Destination.objects.all()

# class PlanViewSet(ModelViewSet):
#     serializer_class = PlanSerializer
#     queryset = Plan.objects.all()


# from django.shortcuts import render
# from django.http import JsonResponse
# from django.urls.resolvers import LocaleRegexDescriptor
# from rest_framework import serializers
# from .serializers import CityIdSerializer, CitySerializer, HotelSerializer, PhotosSerializer, ReviewSerializer, ServiceSerializer
# import json
# from collections import OrderedDict

from .serializers import PlanSerializer,PhotosPlansSerializer

from .models import Plan, Destination, PhotosPlans
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def apiOverView(request):
    test = {
        'test': 'test'
    
    }
    return Response(test)


@api_view(['GET'])
def plansList(request):

    planes = Plan.objects.all()
    serializer = PlanSerializer(planes, many=True)
    #select_related('Plan','PhotosPlans')
    # photos = PhotosPlans.objects.all()
    # photos_serializer = PhotosPlansSerializer(photos, many=True)
    

    return Response({
        'planes': serializer.data
        # 'photos': photos_serializer.data
    })

