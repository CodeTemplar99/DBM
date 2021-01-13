from django.urls import path
from . import views
app_name = 'days'
urlpatterns = [
    path('', views.days, name='days'),
]
