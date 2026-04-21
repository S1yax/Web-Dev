from rest_framework import viewsets
from .models import Movie
from .serializers import MovieSerializer

from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__' 
        
