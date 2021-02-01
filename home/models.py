from django.db import models

# Create your models here.


class Event(models.Model):
    Event = models.CharField(max_lenght=200)
    Date = models.DateField()

    def __str__(self):
        return str(self.Event)
