from django.urls import path
from . import views

urlpatterns = [
    path('detection/', views.detection_api, name="main-detection")
]
