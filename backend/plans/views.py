
from rest_framework import serializers
from .models import PhotosPlans, Plan
from .serializers import PhotosPlansSerializer, PlanSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def apiOverView(request):
    test = {
        'test': 'test'
    
    }
    return Response(test)

@api_view(['GET'])
def allplansList(request):

    planes = Plan.objects.all()
    serializer = PlanSerializer(planes, many=True)

    return Response({
        'planes':  serializer.data    
    })



@api_view(['GET'])
def plansList(request,name):

    planes = Plan.objects.filter(id = name)
    serializer = PlanSerializer(planes, many=True)

    photos_planes = PhotosPlans.objects.filter(id_plans = name)

    
    # photos_planes = PhotosPlans.objects.all().select_related('id_plans')
    serializerPhotos = PhotosPlansSerializer(photos_planes, many=True)

    return Response({
        'planes': {'plan': serializer.data, 'photos': serializerPhotos.data}    
    })

