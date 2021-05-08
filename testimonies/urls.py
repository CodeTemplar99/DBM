from django.urls import path
from . import views
app_name = 'testimonies'
urlpatterns = [
    path('', views.testimonies, name='testimonies'),
]
