from django.urls import path
from . import views
app_name = 'aboutministry'
urlpatterns = [
    path('', views.about, name='about'),
]
