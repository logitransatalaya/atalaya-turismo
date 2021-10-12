from os import name
from django.conf.urls import url
from django.urls.resolvers import URLPattern 
from django.urls import path 
from hotels import views


urlpatterns = [
    path('test', views.apiOverView, name='api-overview'),
    path('cities/', views.cityList, name='cities'),
    path('hotels/', views.hotels, name='hotels')

]
