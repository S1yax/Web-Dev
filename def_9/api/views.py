from rest_framework import viewsets
from .models import Movie
from .serializers import MovieSerializer

# Никаких импортов из .views здесь быть не должно!

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
