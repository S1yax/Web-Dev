from django.http import JsonResponse
from .models import Movie
from django.shortcuts import get_object_or_404

def movie_list(request):
    
    movies = list(Movie.objects.values('id', 'title', 'director', 'year', 'rating'))
    return JsonResponse(movies, safe=False)

def movie_detail(request, id):
    movie = get_object_or_404(Movie, id=id)
    data = {
        "id": movie.id,
        "title": movie.title,
        "director": movie.director,
        "year": movie.year,
        "rating": movie.rating,
    }
    return JsonResponse(data)
