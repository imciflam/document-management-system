from treaties.models import Treaty
from rest_framework import viewsets, permissions
from .serializers import TreatySerializer

# Treaty Viewset


class TreatyViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TreatySerializer

    def get_queryset(self):
        return self.request.user.treaties.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
