# Generated by Django 2.1.5 on 2019-05-14 09:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Treaty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contractCode', models.CharField(blank=True, max_length=100)),
                ('contractStageCode', models.CharField(blank=True, max_length=100)),
                ('counteragentCode', models.CharField(blank=True, max_length=100)),
                ('sumMoney', models.CharField(blank=True, max_length=100)),
                ('sumNDS', models.CharField(blank=True, max_length=100)),
                ('dateOfSigning', models.CharField(blank=True, max_length=500)),
                ('contractType', models.CharField(blank=True, max_length=500)),
                ('placeOfStorage', models.CharField(blank=True, max_length=500)),
                ('requisite', models.CharField(blank=True, max_length=500)),
                ('periodOfValidity', models.CharField(blank=True, max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='treaties', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
