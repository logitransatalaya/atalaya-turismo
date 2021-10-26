
from rest_framework import serializers
from .models import PhotosPlans, Plan,IncludesPlan,NoInclude,Notes
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import IncludesPlanSerializer, NoIncludeSerializer, PhotosPlansSerializer, PlanSerializer, IncludesPlan,NoInclude,NotesSerializer

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

    """ Treamos las Pohotos de la db filtrada por el id del plan """
    photos_planes = PhotosPlans.objects.filter(plan = name)
    serializerPhotos = PhotosPlansSerializer(photos_planes, many=True)

    """ Traemos los que incluye el plan """
    includes_plan = IncludesPlan.objects.filter(plan = name)
    serializerIncludes = IncludesPlanSerializer(includes_plan, many=True)

    """ Traemos lo que no incluye los planes """
    noIncludes_plan = NoInclude.objects.filter(plan = name)
    serializerNoIncludes = NoIncludeSerializer(noIncludes_plan, many=True)

    """ Traemos las notas del plan """
    notes_plan = Notes.objects.filter(plan = name)
    serializerNotes = NotesSerializer(notes_plan, many=True)

    """ Retornamos el objeto en la peticion """
    return Response({
        'planes': {
            'plan': serializer.data, 
            'photos': serializerPhotos.data, 
            'includes':serializerIncludes.data,
            'noIncludes': serializerNoIncludes.data,
            'notes': serializerNotes.data
        }
    })

