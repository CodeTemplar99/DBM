from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
# Create your views here.


def contact(request):
    return render(request, 'contact.html')
