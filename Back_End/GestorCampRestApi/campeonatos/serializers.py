from rest_framework import serializers 
from campeonatos.models import Campeonato
 
 
class CampeonatoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Campeonato
        fields = ('id',
                  'camp_nome',
                  'camp_n_equip',
                  'camp_modalidade',
                  'publicado')