from django.urls import path
from .views import MovieListAPIView, MovieDetailAPIView

urlpatterns = [
    path('movies/', MovieListAPIView.as_view()),      
    path('movies/<int:movie_id>/', MovieDetailAPIView.as_view()), 
]
