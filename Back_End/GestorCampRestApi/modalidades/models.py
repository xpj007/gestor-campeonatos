from django.db import models

# Create your models here.

class Modalidade(models.Model):
    mod_nome = models.CharField(max_length=70, blank=False, default='')
    mod_descri = models.CharField(max_length=200,blank=False, default='')
    mod_qtd_time= models.IntegerField()
    publicado = models.BooleanField(default=False)

    class Meta:
        db_table = 'modalidades'
