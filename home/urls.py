from django.urls import path
from . import views
app_name = 'home'
urlpatterns = [
    path('', views.home, name='home'),
    # path('home', views.home, name='home'),
    path('aboutministry', views.about, name='about'),
    path('days', views.days, name='days'),
    path('contact', views.contact, name='contact'),
    path('announcements', views.announcements, name='announcements')
]
