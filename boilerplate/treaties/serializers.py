from rest_framework import serializers
from treaties.models import Treaty 

# Treaty Serializer
class TreatySerializer(serializers.ModelSerializer):
  class Meta:
    model = Treaty 
    fields = '__all__'