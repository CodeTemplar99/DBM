from django.urls import path
from . import views
# from .views import EventListView, EventDetailView
app_name = 'home'
urlpatterns = [
    path('', views.home, name='home'),
    # path('home', views.home, name='home'),
    path('aboutministry', views.about, name='about'),
    path('days', views.days, name='days'),
    path('contact', views.contact, name='contact'),
    path('announcements', views.announcements, name='announcements'),
    path('products', views.products, name='products'),
    # path('event', EventListView.as_view(), name='event-list'),
    # path('<pk>/', EventDetailView.as_view(), name='event-detail'),
]
