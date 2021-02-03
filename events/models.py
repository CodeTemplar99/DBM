from django.db import models
from django.urls import reverse
# Create your models here.


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    Event = models.CharField(blank=True, null=True, max_length=200)
    Date = models.DateTimeField()
