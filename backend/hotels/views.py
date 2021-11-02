from .models import City, Hotel
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CitySerializer, HotelSerializer

@api_view(['GET'])
def cityList(request):
    """ Traemos todas las ciudades """
    cities = City.objects.all()
    serializer = CitySerializer(cities, many=True)

    return Response({
        'cities': serializer.data
    })

@api_view(['GET'])
def hotels(request, id_city):

    """ filtramos todos los hoteles que tengan el id del parametro de la url """
    hotels = Hotel.objects.filter(id_city=id_city)
    serializer = HotelSerializer(hotels, many=True)

    return Response({
            'hotels' : serializer.data
        }
    )

@api_view(['GET'])
def hotel(request, name_city, id_hotel):
    """ filtramos por el id del hotel indicado """
    hotel = Hotel.objects.filter(id=id_hotel)
    serializer_hotel = HotelSerializer(hotel, many=True)

    cities = City.objects.filter(id=name_city)
    serializer = CitySerializer(cities, many=True)
    return Response({
            'hotel' : serializer_hotel.data,
            'city': serializer.data
        }
    )
