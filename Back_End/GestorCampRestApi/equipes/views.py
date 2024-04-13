from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from equipes.models import Equipe
from equipes.serializers import EquipeSerializer
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def equipe_lista(request):
    # GET lista de equipes, POST uma nova equipe, DELETE todas as equipes
    if request.method == 'GET':
        equipes = Equipe.objects.all()
        
        Equipe_nome = request.GET.get('Equipe_nome', None)
        if Equipe_nome is not None:
            equipes = equipes.filter(Equipe_nome__icontains=Equipe_nome)
        
        equipes_serializer = EquipeSerializer(equipes, many=True)
        return JsonResponse(equipes_serializer.data, safe=False)
    elif request.method == 'POST':
        equipe_data = JSONParser().parse(request)
        equipe_serializer = EquipeSerializer(data=equipe_data)
        if equipe_serializer.is_valid():
            equipe_serializer.save()
            return JsonResponse(equipe_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(equipe_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Equipe.objects.all().delete()
        return JsonResponse({'message': '{} Equipes deletadas com Sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

 
@api_view(['GET', 'PUT', 'DELETE'])
def equipe_detalhe(request, pk):
    # Procura equipe por Pk(id) 
    try: 
        equipe = Equipe.objects.get(pk=pk)
        if request.method == 'GET': 
            equipe_serializer = EquipeSerializer(equipe) 
            return JsonResponse(equipe_serializer.data) 
        elif request.method == 'PUT': 
            equipe_data = JSONParser().parse(request) 
            equipe_serializer = EquipeSerializer(equipe, data=equipe_data) 
            if equipe_serializer.is_valid(): 
                equipe_serializer.save() 
                return JsonResponse(equipe_serializer.data) 
            return JsonResponse(equipe_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE': 
            equipe.delete()
        return JsonResponse({'message': 'Equipe deletada com Sucesso!'}, status=status.HTTP_204_NO_CONTENT)
    except Equipe.DoesNotExist: 
        return JsonResponse({'message': 'A Equipe não está cadastrada'}, status=status.HTTP_404_NOT_FOUND) 
    
        
@api_view(['GET'])
def equipe_lista_publicada(request):
    # GET todas as equipes publicadas
    equipes = Equipe.objects.filter(published=True)
        
    if request.method == 'GET': 
        equipes_serializer = EquipeSerializer(equipes, many=True)
        return JsonResponse(equipes_serializer.data, safe=False)