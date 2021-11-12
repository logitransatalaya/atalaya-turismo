from os import name
from offersflash import views
from django.urls import path 
from rest_framework.routers import DefaultRouter

router_destination = DefaultRouter()
router_plan = DefaultRouter()

urlpatterns = [
    path('offerflashtest/', views.apiOverView, name='offersflashtest'),
    path('offersflash/', views.AllOfferflashList, name='allofferflahslist')
]