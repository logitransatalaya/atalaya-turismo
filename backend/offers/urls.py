from os import name
from offers import views
from django.urls import path 
from rest_framework.routers import DefaultRouter

router_destination = DefaultRouter()
router_plan = DefaultRouter()

urlpatterns = [
    path('offerstest/', views.apiOverView, name='offers'),
    path('offers/', views.AllOfferList, name='allofferlist'),
]