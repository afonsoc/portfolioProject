# Generated by Django 3.2 on 2021-04-06 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stocks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=20, unique=True)),
                ('stock_name', models.CharField(max_length=50, unique=True)),
                ('quantity', models.IntegerField()),
                ('buy_price', models.FloatField()),
                ('sell_price', models.FloatField()),
                ('date_added', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
