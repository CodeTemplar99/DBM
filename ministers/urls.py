from django.urls import path
from . import views
app_name = 'ministers'
urlpatterns = [
    path('', views.ministers, name='ministers'),
]
