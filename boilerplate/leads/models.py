from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    documentCode = models.CharField(max_length=100, blank=True)
    documentStageCode = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100, blank=True)
    message = models.CharField(max_length=500, blank=True)
    fileDocument = models.CharField(max_length=500, blank=True)
    noteText = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
