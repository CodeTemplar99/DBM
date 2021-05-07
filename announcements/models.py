from django.db import models
from django.urls import reverse
from django.utils import timezone
# Create your models here.


class Announcement(models.Model):
    id = models.AutoField(primary_key=True)
    Title = models.CharField(blank=True, null=True, max_length=120)
    Cc = models.CharField(blank=False, null=True, max_length=120)
    Details = models.CharField(blank=False, null=True, max_length=120)
    Date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Title
