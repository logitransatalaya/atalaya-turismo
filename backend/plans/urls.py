# from django.db.models import base
# from plans import views
from rest_framework.routers import DefaultRouter
# from .views import *

router_destination = DefaultRouter()
router_plan = DefaultRouter()

# router_destination.register(prefix='destination', basename='destination', viewset=DestinationViewSet)
# router_plan.register(prefix='plan', basename='plan', viewset=PlanViewSet)

from os import name
from django.conf.urls import url
from django.urls.resolvers import URLPattern 
from django.urls import path 
from plans import views


urlpatterns = [
    path('planstest/', views.apiOverView, name='plans'),
    path('plans/', views.plansList, name='planslist'),
    # path('ciudades/<str:name>', views.hotels, name='hotels'),
    # path('ciudades/<str:name>/<int:pk>', views.hotel, name='hotel')

]