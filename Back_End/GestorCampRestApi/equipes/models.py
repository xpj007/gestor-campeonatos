from django.db import models

# Create your models here.
class Equipe(models.Model):
    Equipe_nome = models.CharField(max_length=100, blank=False, default='')
    publicado = models.BooleanField(default=False)

    class Meta:
        db_table = 'equipes'
