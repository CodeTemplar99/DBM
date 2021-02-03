from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from .models import Event
# Create your views here.


def events(request):
    ob = Event.objects.get(id=1)
    return render(request, 'events.html', {'ob': ob})
