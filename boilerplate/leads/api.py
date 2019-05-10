from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerialiser

#viewset - allows crud without explicit methods
class LeadViewSet(viewsets.ModelViewSet):
    #queryset = Lead.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]


    serializer_class = LeadSerialiser

    def get_queryset(self):
        return self.request.user.leads.all()

    def partial_create(self, serializer):
        serializer.save(owner=self.request.user)