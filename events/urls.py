from django.urls import path
from .views import EventListView, EventDetailView

app_name = 'events'
urlpatterns = [
    # path('', EventListView.as_view(), name='event-list'),
    path('<pk>/', EventDetailView.as_view(), name='event-detail'),
]
