from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from jogos.models import Jogo
from jogos.serializers import JogoSerializer
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def jogo_lista(request):
    # GET lista de jogos, POST uma novo jogo, DELETE todos os jogos
    if request.method == 'GET':
        jogos = Jogo.objects.all()
        
        jogo_camp_nome = request.GET.get('jogo_camp_nome', None)
        if jogo_camp_nome is not None:
            jogos = jogos.filter(jogo_camp_nome__icontains=jogo_camp_nome)
        
        jogos_serializer = JogoSerializer(jogos, many=True)
        return JsonResponse(jogos_serializer.data, safe=False)
    elif request.method == 'POST':
        jogo_data = JSONParser().parse(request)
        jogo_serializer = JogoSerializer(data=jogo_data)
        if jogo_serializer.is_valid():
            jogo_serializer.save()
            return JsonResponse(jogo_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(jogo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Jogo.objects.all().delete()
        return JsonResponse({'message': '{} Jogos deletadas com Sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

 
@api_view(['GET', 'PUT', 'DELETE'])
def jogo_detalhe(request, pk):
    # Procura jogo por Pk(id) 
    try: 
        jogo = Jogo.objects.get(pk=pk)
        if request.method == 'GET': 
            jogo_serializer = JogoSerializer(jogo) 
            return JsonResponse(jogo_serializer.data) 
        elif request.method == 'PUT': 
            jogo_data = JSONParser().parse(request) 
            jogo_serializer = JogoSerializer(jogo, data=jogo_data) 
            if jogo_serializer.is_valid(): 
                jogo_serializer.save() 
                return JsonResponse(jogo_serializer.data) 
            return JsonResponse(jogo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE': 
            jogo.delete()
        return JsonResponse({'message': 'Jogo deletado com Sucesso!'}, status=status.HTTP_204_NO_CONTENT)
    except Jogo.DoesNotExist: 
        return JsonResponse({'message': 'O Jogo não está cadastrado'}, status=status.HTTP_404_NOT_FOUND) 
    
        
@api_view(['GET'])
def jogo_lista_publicada(request):
    # GET todos os jogos publicados
    jogos = Jogo.objects.filter(published=True)
        
    if request.method == 'GET': 
        jogos_serializer = JogoSerializer(jogos, many=True)
        return JsonResponse(jogos_serializer.data, safe=False)