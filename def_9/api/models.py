from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=200)
    director = models.CharField(max_length=100)
    rating = models.FloatField()
    is_released = models.BooleanField(default=True)

    def __str__(self):
        return self.title
