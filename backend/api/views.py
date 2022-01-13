from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

from api.detectionCode import handle_uploaded_file, detectFakeVideo

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def detection_api(request):
    if request.method == 'GET':
        data = {'b': 60, 'c': 'red'}
        return Response({'accuracy': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        up_file = request.FILES.get('file')
        handle_uploaded_file(up_file)
        prediction = detectFakeVideo(f"uploaded_file/{up_file}")
        print(prediction)
        if prediction[0] == 0:
            output = "FAKE"
        else:
            output = "REAL"
        confidence = prediction[1]
        data = {'output': output, 'confidence': confidence}
        return Response({'accuracy': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)
