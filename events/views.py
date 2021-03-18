from django.shortcuts import render, get_object_or_404
# from django.http import HttpResponse, Http404
from django.views.generic import ListView, DetailView
from .models import Event
# Create your views here.


# def events(request):
#     ob = Event.objects.get(id=1)
#     return render(request, 'events.html', {'ob': ob})

class EventListView(ListView):
    model = Event
    template_name = 'events/main.html'



class EventDetailView(DetailView):
    model = Event
    template_name = 'events/countdown.html'
