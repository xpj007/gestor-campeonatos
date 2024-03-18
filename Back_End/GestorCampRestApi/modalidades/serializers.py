from rest_framework import serializers 
from modalidades.models import Modalidade
 
 
class ModalidadeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Modalidade
        fields = ('id',
                  'mod_nome',
                  'mod_descri',
                  'mod_qtd_time',
                  'publicado')