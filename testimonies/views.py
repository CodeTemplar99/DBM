from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from .models import Testimonies
# Create your views here.


def testimonies(request):
    results = Testimonies.objects.all()
    context = {'results': results, }
    return render(request, 'testimonies.html', context)
