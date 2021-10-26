
from cities.models import Cities
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Hotel, Service, Photos, Review
from .serializers import CityIdSerializer, CitySerializer, HotelSerializer, PhotosSerializer, ReviewSerializer, ServiceSerializer

@api_view(['GET'])
def apiOverView(request):
    test = {
        'test': 'test'
    
    }
    return Response(test)

@api_view(['GET'])
def cityList(request):

    cities = Cities.objects.all()
    serializer = CitySerializer(cities, many=True)

    return Response({
        'cities': serializer.data
    })

@api_view(['GET'])
def hotels(request, name):
    
    city = Cities.objects.filter(city__iexact=name)
    city_id_serializer = CityIdSerializer(city, many=True)
    cityId = city_id_serializer.data[0]['id']

    hotels = Hotel.objects.filter(id_city=cityId)

    serializer = HotelSerializer(hotels, many=True)

    return Response({
            'hotels' : serializer.data
        }
    )

@api_view(['GET'])
def hotel(request, name, pk):

    city = Cities.objects.filter(city__iexact=name)
    serializer_city = CitySerializer(city, many=True)

    hotel = Hotel.objects.filter(id=pk, id_city=serializer_city.data[0]['id'])
    serializer_hotel = HotelSerializer(hotel, many=True)

    return Response({
        'hotel': serializer_hotel.data,
    })



