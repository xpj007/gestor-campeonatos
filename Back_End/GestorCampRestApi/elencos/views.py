from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from elencos.models import Elenco
from elencos.serializers import ElencoSerializer
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def elenco_lista(request):
    # GET lista de Elencos, POST um novo elenco, DELETE todos os Elencos
    if request.method == 'GET':
        elencos = elencos.objects.all()
        
        el_equipe_nome = request.GET.get('el_equipe_nome', None)
        if el_equipe_nome is not None:
            elencos = elencos.filter(el_equipe_nome__icontains=el_equipe_nome)
        
        elencos_serializer = ElencoSerializer(elencos, many=True)
        return JsonResponse(elencos_serializer.data, safe=False)
    elif request.method == 'POST':
        elenco_data = JSONParser().parse(request)
        elenco_serializer = ElencoSerializer(data=elenco_data)
        if elenco_serializer.is_valid():
            elenco_serializer.save()
            return JsonResponse(elenco_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(elenco_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Elenco.objects.all().delete()
        return JsonResponse({'message': '{} Elencos deletados com Sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
