from os import name
from toures import views
from django.urls import path 
from rest_framework.routers import DefaultRouter

router_destination = DefaultRouter()
router_plan = DefaultRouter()

urlpatterns = [
    path('tourstest/', views.apiOverView, name='plans'),
    path('tours/', views.allToursList, name='TourlistAll'),
    path('tours/<str:name>', views.TourList, name='Tourlist'),
]

