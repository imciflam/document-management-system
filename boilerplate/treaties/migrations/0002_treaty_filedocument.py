# Generated by Django 2.2.1 on 2019-05-14 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('treaties', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='treaty',
            name='fileDocument',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
