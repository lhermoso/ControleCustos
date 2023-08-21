from .serializers import *
from rest_framework.viewsets import ReadOnlyModelViewSet
from django_filters.rest_framework import DjangoFilterBackend



class GrupoViewSet(ReadOnlyModelViewSet):
    serializer_class = GrupoSerializer
    queryset = Grupo.objects.all()
    filter_backends = [DjangoFilterBackend]



class LancamentoViewSet(ReadOnlyModelViewSet):
    serializer_class = LancamentoSerializer
    queryset = Lancamento.objects.all()
    filter_backends = [DjangoFilterBackend]

