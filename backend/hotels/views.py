from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CitySerializer, CityIdSerializer, HotelSerializer, ServiceSerializer

from .models import City, Hotel, Services, Services_hotel

# Create your views here.
@api_view(['GET'])
def cityList(request):
    cities = City.objects.all()
    serializer = CitySerializer(cities, many=True)

    return Response({
        'cities': serializer.data
    })

@api_view(['GET'])
#!name_city es lo que viene por parametros en la url
def hotels(request, name_city):
    #!En la variable city me queda el query despues de filtrar por el nombre 
    #!debo de pasarlo por el serializer el cual me devuelve un array 
    #!como es uno le pongo cero y extraigo el id

    city = City.objects.filter(name__iexact=name_city)
    city_name = CityIdSerializer(city, many=True)
    cityId = city_name.data[0]['id']

    #!teniendo el id, voy a irme a la tabla de hoteles y voy a filtrar por 
    #!el campo id con cityId despues de esto serializo los datos

    hotels = Hotel.objects.filter(id_city=cityId)
    serializer = HotelSerializer(hotels, many=True)


    return Response({
            'hotels' : serializer.data
        }
    )

@api_view(['GET'])
def hotel(request, name_city, pk):
    hotel = Hotel.objects.filter(id=pk)

    serializer_hotel = HotelSerializer(hotel, many=True)

    return Response({
            'hotel' : serializer_hotel.data,
        }
    )
