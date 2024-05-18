from django.db import models

# Create your models here.
class Atleta(models.Model):
    at_nome = models.CharField(max_length=100, blank=False, default='')
    at_dnasc = models.DateField() 
    at_modalidade = models.CharField(max_length=70, blank=False, default='')
    at_nota = models.IntegerField()
    at_posicao = models.CharField(max_length=70, blank=False, default='')
    publicado = models.BooleanField(default=False)
    
    class Meta:
        db_table = 'atletas'
