from os import name
from hotels import views
from django.urls import path 

urlpatterns = [
    path('ciudades/', views.cityList, name='cities'),
    path('hotels/<int:id_city>', views.hotels, name='hotels'),
    path('hotels/<str:name_city>/<int:id_hotel>', views.hotel, name='hotel')
]