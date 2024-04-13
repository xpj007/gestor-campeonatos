from django.db import models

# Create your models here.
class Campeonato(models.Model):
    camp_nome = models.CharField(max_length=100, blank=False, default='')
    camp_n_equip = models.IntegerField()
    camp_modalidade = models.CharField(max_length=70, blank=False, default='')
    publicado = models.BooleanField(default=False)

    class Meta:
        db_table = 'campeonatos'