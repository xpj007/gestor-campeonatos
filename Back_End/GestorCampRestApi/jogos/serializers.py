from rest_framework import serializers 
from jogos.models import Jogo   
 
 
class JogoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Jogo
        fields = ('id',
                  'jogo_camp_nome',
                  'jogo_cs_nome',
                  'jogo_cs_placar',
                  'jogo_fr_nome',
                  'jogo_fr_placar',
                  'jogo_data',
                  'jogo_local',
                  'publicado')