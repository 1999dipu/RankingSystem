# Generated by Django 3.0.5 on 2020-04-21 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Availability',
            fields=[
                ('lockerid', models.IntegerField(primary_key=True, serialize=False)),
                ('non_del_days', models.CharField(default='0000000', max_length=7, verbose_name='Non delivery days')),
                ('timings_open', models.TimeField()),
                ('timings_closed', models.TimeField()),
                ('status', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Onboard',
            fields=[
                ('lockerid', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=250)),
                ('country', models.CharField(max_length=100)),
                ('address', models.TextField()),
                ('zipcode', models.IntegerField()),
                ('total_slots', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('lockerid', models.IntegerField(primary_key=True, serialize=False)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=2)),
            ],
        ),
        migrations.CreateModel(
            name='Throughput',
            fields=[
                ('lockerid', models.IntegerField(primary_key=True, serialize=False)),
                ('throughput', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Occupancy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lockerid', models.IntegerField()),
                ('date', models.DateField()),
                ('occupancy', models.FloatField()),
            ],
            options={
                'unique_together': {('lockerid', 'date')},
            },
        ),
    ]
