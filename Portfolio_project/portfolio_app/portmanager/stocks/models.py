from django.db import models

# Create your models here.
class Stocks(models.Model):
    ticker = models.CharField(max_length=20, blank=False, unique=True)
    stock_name = models.CharField(max_length=50, blank=False, unique=True)
    quantity = models.IntegerField(blank=False)
    buy_price = models.FloatField(blank=False)
    sell_price = models.FloatField(blank=False)
    date_added = models.DateField(auto_now_add=True)