from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from campeonatos.models import Campeonato
from campeonatos.serializers import CampeonatoSerializer
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def campeonato_lista(request):
    # GET lista de campeonatos, POST um novo campeonato, DELETE todos os campeonatos
    if request.method == 'GET':
        campeonatos = Campeonato.objects.all()
        
        camp_nome = request.GET.get('camp_nome', None)
        if camp_nome is not None:
            campeonatos = campeonatos.filter(camp_nome__icontains=camp_nome)
        
        campeonatos_serializer = CampeonatoSerializer(campeonatos, many=True)
        return JsonResponse(campeonatos_serializer.data, safe=False)
    elif request.method == 'POST':
        campeonato_data = JSONParser().parse(request)
        campeonato_serializer = CampeonatoSerializer(data=campeonato_data)
        if campeonato_serializer.is_valid():
            campeonato_serializer.save()
            return JsonResponse(campeonato_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(campeonato_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Campeonato.objects.all().delete()
        return JsonResponse({'message': '{} Campeonatos deletados com Sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

 
@api_view(['GET', 'PUT', 'DELETE'])
def campeonato_detalhe(request, pk):
    # Procura campeonato por Pk(id) 
    try: 
        campeonato = Campeonato.objects.get(pk=pk)
        if request.method == 'GET': 
            campeonato_serializer = CampeonatoSerializer(campeonato) 
            return JsonResponse(campeonato_serializer.data) 
        elif request.method == 'PUT': 
            campeonato_data = JSONParser().parse(request) 
            campeonato_serializer = CampeonatoSerializer(campeonato, data=campeonato_data) 
            if campeonato_serializer.is_valid(): 
                campeonato_serializer.save() 
                return JsonResponse(campeonato_serializer.data) 
            return JsonResponse(campeonato_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE': 
            campeonato.delete()
        return JsonResponse({'message': 'Campeonato deletado com Sucesso!'}, status=status.HTTP_204_NO_CONTENT)
    except Campeonato.DoesNotExist: 
        return JsonResponse({'message': 'O Campeonato não está cadastrado'}, status=status.HTTP_404_NOT_FOUND) 
    
        
@api_view(['GET'])
def campeonato_lista_publicada(request):
    # GET todos os campeonatos publicados
    campeonatos = Campeonato.objects.filter(published=True)
        
    if request.method == 'GET': 
        campeonatos_serializer = CampeonatoSerializer(campeonatos, many=True)
        return JsonResponse(campeonatos_serializer.data, safe=False)