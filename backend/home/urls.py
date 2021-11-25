from os import name
from hotels import views
from django.urls import path
from rest_framework.generics import ListAPIView
from .serializers import HomeBannerSerializer
from .models import HomeBanner

urlpatterns = [
    path('banners/', ListAPIView.as_view(queryset=HomeBanner.objects.all(), serializer_class=HomeBannerSerializer), name='Homebanner'),
]