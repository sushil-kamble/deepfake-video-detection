from random import getrandbits
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (

    TokenRefreshView,
)


urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('detection/', views.detection_api, name="main-detection"),
    path('', views.getRoutes)
]
