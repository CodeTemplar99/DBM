from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from .models import Announcement
# Create your views here.


def announcements(request):
    results = Announcement.objects.all()
    context = {'results': results, }
    return render(request, 'announcements.html', context)
