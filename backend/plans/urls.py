
from os import name
from plans import views
from django.urls import path 
from rest_framework.routers import DefaultRouter

router_destination = DefaultRouter()
router_plan = DefaultRouter()

urlpatterns = [
    path('planstest/', views.apiOverView, name='plans'),
    path('plans/', views.allplansList, name='planslist'),
    path('plans/<str:name>', views.plansList, name='planlist'),
]