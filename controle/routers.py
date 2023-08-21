from rest_framework.routers import DefaultRouter

from .viewsets import *

router = DefaultRouter(trailing_slash=False)

router.register(r"grupo", GrupoViewSet)
router.register(r"lancamento", LancamentoViewSet)

urlpatterns = [*router.urls]
