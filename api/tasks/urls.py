from django.urls import path, include
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),
]