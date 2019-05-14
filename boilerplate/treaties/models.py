from django.db import models 
from django.contrib.auth.models import User

# Create your models here.
class Treaty(models.Model):
    contractCode = models.CharField(max_length=100, blank=True)
    contractStageCode = models.CharField(max_length=100, blank=True)
    counteragentCode = models.CharField(max_length=100, blank=True)
    sumMoney = models.CharField(max_length=100, blank=True)
    sumNDS = models.CharField(max_length=100, blank=True)
    dateOfSigning = models.CharField(max_length=500, blank=True)
    contractType = models.CharField(max_length=500, blank=True)
    placeOfStorage = models.CharField(max_length=500, blank=True)
    requisite = models.CharField(max_length=500, blank=True)
    periodOfValidity = models.CharField(max_length=500, blank=True)
    fileDocument = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
    User, related_name="treaties", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
