from django.db import models
from django.utils import timezone


class Announcements(models.Model):
    id = models.AutoField(primary_key=True)
    cc = models.CharField(blank=False, null=False, max_length=120)
    announcements = models.TextField(max_length=200, blank=False, null=False)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Announcements
