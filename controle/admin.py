from django.contrib import admin
from .models import *


# Register your models here.


@admin.register(Lancamento)
class LacamentoAdmin(admin.ModelAdmin):
    list_display = ["date", "side", "description", "group", "value"]
    search_fields = ["description", "group__name"]


@admin.register(Grupo)
class GrupoAdmin(admin.ModelAdmin):
    list_display = ["name"]
