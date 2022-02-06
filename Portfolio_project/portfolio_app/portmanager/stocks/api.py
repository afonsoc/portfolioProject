from stocks.models import Stocks
from rest_framework import viewsets, permissions
from .serializers import StocksSerializer

class StocksViewSet(viewsets.ModelViewSet):
    queryset = Stocks.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StocksSerializer