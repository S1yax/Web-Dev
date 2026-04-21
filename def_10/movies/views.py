from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Movie
from .serializers import MovieSerializer

class MovieListAPIView(APIView):
    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MovieDetailAPIView(APIView):
    def get_object(self, movie_id):
        try:
            return Movie.objects.get(pk=movie_id)
        except Movie.DoesNotExist:
            raise Http404
    def get(self, request, movie_id):
        movie = self.get_object(movie_id)
        serializer = MovieSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request, movie_id):
        movie = self.get_object(movie_id)
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, movie_id):
        movie = self.get_object(movie_id)
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
