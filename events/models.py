from django.db import models
from django.urls import reverse
# Create your models here.


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    Event = models.CharField(blank=True, null=True, max_length=200)
    Date = models.DateTimeField()
    Details = models.TextField(
        max_length=120, blank=True, null=True)

    def __str__(self):
        return self.Event

    def get_absolute_url(self):
        return reverse("events:event-detail", kwargs={"pk": self.pk})
