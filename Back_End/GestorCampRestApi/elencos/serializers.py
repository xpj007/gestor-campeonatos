from rest_framework import serializers 
from elencos.models import Elenco
 
 
class ElencoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Elenco
        fields = ('id',
                  'el_camp_nome',
                  'el_equipe_nome',
                  'el_at_nome',
                  'el_at_dnasc',
                  'el_at_nota')