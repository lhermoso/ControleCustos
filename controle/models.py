from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator

# Create your models here.

SIDE_CHOICES = (("D", "DEBITO"), ("C", "CREDITO"))


class Grupo(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Lancamento(models.Model):
    date = models.DateTimeField(default=timezone.now)
    side = models.CharField(max_length=1, choices=SIDE_CHOICES, default="C")
    description = models.CharField(max_length=255)
    group = models.ForeignKey(Grupo, on_delete=models.CASCADE, related_name="lancamentos")
    value = models.FloatField(default=0, validators=[MinValueValidator(0.0)])

    def __str__(self):
        return f'{self.date.date()}: {self.value * (-1 if self.side == "D" else 1)}'
