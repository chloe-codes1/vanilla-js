from django.urls import path
from . import views

app_name = 'arts'

urlpatterns = [
    path('ping/', views.ping),
    path('pong/', views.pong),
]
