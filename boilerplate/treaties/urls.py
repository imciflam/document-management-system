from rest_framework import routers
from .api import TreatyViewSet
from django.conf.urls import url
router = routers.DefaultRouter()
router.register('api/treaties', TreatyViewSet, 'treaties')
 

urlpatterns = router.urls
