from rest_framework import serializers 
from atletas.models import Atleta
 
 
class AtletaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Atleta
        fields = ('id',
                  'at_nome',
                  'at_dnasc',
                  'at_modalidade',
                  'at_nota',
                  'at_posicao',
                  'publicado')