
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'categories', MovieViewSet)


urlpatterns = [
    path('', include(router.urls)),
]