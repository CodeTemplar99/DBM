from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from .models import Event


class EventListView(ListView):
    model = Event
    template_name = 'events/main.html'


class EventDetailView(DetailView):
    model = Event
    template_name = 'events/countdown.html'
