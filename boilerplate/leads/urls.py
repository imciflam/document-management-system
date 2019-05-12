from rest_framework import routers
from .api import LeadViewSet
from django.conf.urls import url
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
from leads.views import MyUploadView 
 
urlpatterns = [
    # ...
    url(r'^upload/(?P<filename>[^/]+)$', MyUploadView.as_view())
]


urlpatterns += router.urls
