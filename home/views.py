from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def about(request):
    return render(request, 'about.html')


def days(request):
    return render(request, 'days.html')


def contact(request):
    return render(request, 'contact.html')


def announcements(request):
    return render(request, 'announcements.html')

# events
