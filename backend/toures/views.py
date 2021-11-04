
# Create your views here.

from .models import Tours
from .serializers import ToursSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def apiOverView(request):
    test = {
        'test': 'test de Toures'
    }
    return Response(test)

@api_view(['GET'])
def allToursList(request):

    toures = Tours.objects.all()
    serializerToures = ToursSerializer(toures, many=True)

    return Response({
        'Toures':serializerToures.data
    })

@api_view(['GET'])
def TourList(request, name):

    toures = Tours.objects.filter(id = name)
    serializerToures = ToursSerializer(toures, many=True)
    
    return Response({
        'Toures':serializerToures.data 
    })

