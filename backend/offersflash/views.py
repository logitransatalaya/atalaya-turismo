from .models import Offersflash
from .serializers import OffersFlashSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def apiOverView(request):
    test = {
        'test': 'test'
    }
    return Response(test)

@api_view(['GET'])
def AllOfferflashList(request):

    offers_flash = Offersflash.objects.all()
    serializer = OffersFlashSerializer(offers_flash, many=True)

    return Response({
        'offersflash': serializer.data
    })