from os import name
from django.urls import path 
from hotels import views


urlpatterns = [
    path('test', views.apiOverView, name='api-overview'),
    path('ciudades/', views.cityList, name='cities'),
    path('ciudades/<str:name>', views.hotels, name='hotels'),
    path('ciudades/<str:name>/<int:pk>', views.hotel, name='hotel')
]