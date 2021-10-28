from .models import Offers
from .serializers import OffersSerializer
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
def AllOfferList(request):

    cities = Offers.objects.all()
    serializer = OffersSerializer(cities, many=True)

    return Response({
        'offers': serializer.data
    })