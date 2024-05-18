from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from atletas.models import Atleta
from atletas.serializers import AtletaSerializer
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def atleta_lista(request):
    # GET lista de atletas, POST um novo atleta, DELETE todos os atletas
    if request.method == 'GET':
        atletas = Atleta.objects.all()
        
        at_nome = request.GET.get('at_nome', None)
        if at_nome is not None:
            atletas = atletas.filter(at_nome__icontains=at_nome)
        
        atletas_serializer = AtletaSerializer(atletas, many=True)
        return JsonResponse(atletas_serializer.data, safe=False)
    elif request.method == 'POST':
        atleta_data = JSONParser().parse(request)
        atleta_serializer = AtletaSerializer(data=atleta_data)
        if atleta_serializer.is_valid():
            atleta_serializer.save()
            return JsonResponse(atleta_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(atleta_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Atleta.objects.all().delete()
        return JsonResponse({'message': '{} Atletas deletados com Sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

 
@api_view(['GET', 'PUT', 'DELETE'])
def atleta_detalhe(request, pk):
    # Procura atleta por Pk(id) 
    try: 
        atleta = Atleta.objects.get(pk=pk)
        if request.method == 'GET': 
            atleta_serializer = AtletaSerializer(atleta) 
            return JsonResponse(atleta_serializer.data) 
        elif request.method == 'PUT': 
            atleta_data = JSONParser().parse(request) 
            atleta_serializer = AtletaSerializer(atleta, data=atleta_data) 
            if atleta_serializer.is_valid(): 
                atleta_serializer.save() 
                return JsonResponse(atleta_serializer.data) 
            return JsonResponse(atleta_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE': 
            atleta.delete()
        return JsonResponse({'message': 'Atleta deletado com Sucesso!'}, status=status.HTTP_204_NO_CONTENT)
    except Atleta.DoesNotExist: 
        return JsonResponse({'message': 'O Atleta não está cadastrado'}, status=status.HTTP_404_NOT_FOUND) 
    
        
@api_view(['GET'])
def atleta_lista_publicada(request):
    # GET todos os atletas publicados
    atletas = Atleta.objects.filter(published=True)
        
    if request.method == 'GET': 
        atletas_serializer = AtletaSerializer(atletas, many=True)
        return JsonResponse(atletas_serializer.data, safe=False)
