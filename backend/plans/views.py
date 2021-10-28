
from .models import  Plan
from .serializers import  PlanSerializer
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

    """ Treamos los Planes de la db """
    planes = Plan.objects.filter(id = name)
    serializer = PlanSerializer(planes, many=True)

    """ Retornamos el objeto en la peticion """
    return Response({
        'planes': serializer.data 
    })

