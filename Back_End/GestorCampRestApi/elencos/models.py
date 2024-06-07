from django.db import models

# Create your models here.
class Elenco(models.Model):

    el_camp_nome = models.CharField(max_length=100, blank=False, default='')
    el_equipe_nome = models.CharField(max_length=100, blank=False, default='')
    el_at_nome = models.CharField(max_length=100, blank=False, default='')
    el_at_dnasc = models.DateField() 
    el_at_nota = models.IntegerField()
    
    class Meta:
        db_table = 'elencos'