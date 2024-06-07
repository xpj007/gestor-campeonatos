from django.db import models

# Create your models here.
class Jogo(models.Model):
    jogo_camp_nome = models.CharField(max_length=100, blank=False, default='')
    jogo_cs_nome = models.CharField(max_length=100, blank=False, default='')
    jogo_cs_placar = models.IntegerField()
    jogo_fr_nome = models.CharField(max_length=100, blank=False, default='')
    jogo_fr_placar = models.IntegerField()
    jogo_data = models.DateField() 
    jogo_local = models.CharField(max_length=100, blank=False, default='')
    publicado = models.BooleanField(default=False)

    class Meta:
        db_table = 'jogos'
