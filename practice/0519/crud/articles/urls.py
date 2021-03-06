from django.urls import path
from . import views 

app_name = 'articles'

urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('<int:article_pk>/like/', views.like, name='like'),
    path('<int:article_pk>/like_api/', views.like_api, name='like_api')
]