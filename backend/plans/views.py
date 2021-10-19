from .serializers import DestinationSerializer, PlanSerializer
from .models import Destination, Plan
from rest_framework.viewsets import ModelViewSet
# Create your views here.


class DestinationViewSet(ModelViewSet):
    serializer_class = DestinationSerializer
    queryset = Destination.objects.all()

class PlanViewSet(ModelViewSet):
    serializer_class = PlanSerializer
    queryset = Plan.objects.all()