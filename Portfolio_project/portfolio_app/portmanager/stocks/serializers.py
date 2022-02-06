from rest_framework import serializers
from stocks.models import Stocks

class StocksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stocks
        fields = '__all__'