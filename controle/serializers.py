from rest_framework import serializers
from .models import *


class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = "__all__"


class LancamentoSerializer(serializers.ModelSerializer):
    group = GrupoSerializer()
    class Meta:
        model = Lancamento
        fields = "__all__"
