from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from modalidades.models import Modalidade
from modalidades.serializers import ModalidadeSerializer
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def modalidade_lista(request):
    # GET lista de modalidades, POST uma nova modalidade, DELETE todas as modalidades
    if request.method == 'GET':
        modalidades = Modalidade.objects.all()
        
        mod_nome = request.GET.get('mod_nome', None)
        if mod_nome is not None:
            modalidades = modalidades.filter(mod_nome__icontains=mod_nome)
        
        modalidades_serializer = ModalidadeSerializer(modalidades, many=True)
        return JsonResponse(modalidades_serializer.data, safe=False)
    elif request.method == 'POST':
        modalidade_data = JSONParser().parse(request)
        modalidade_serializer = ModalidadeSerializer(data=modalidade_data)
        if modalidade_serializer.is_valid():
            modalidade_serializer.save()
            return JsonResponse(modalidade_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(modalidade_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Modalidade.objects.all().delete()
        return JsonResponse({'message': '{} Modalidades deletadas com Sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

 
@api_view(['GET', 'PUT', 'DELETE'])
def modalidade_detalhe(request, pk):
    # Procura modalidade por Pk(id) 
    try: 
        modalidade = Modalidade.objects.get(pk=pk)
        if request.method == 'GET': 
            modalidade_serializer = ModalidadeSerializer(modalidade) 
            return JsonResponse(modalidade_serializer.data) 
        elif request.method == 'PUT': 
            modalidade_data = JSONParser().parse(request) 
            modalidade_serializer = ModalidadeSerializer(modalidade, data=modalidade_data) 
            if modalidade_serializer.is_valid(): 
                modalidade_serializer.save() 
                return JsonResponse(modalidade_serializer.data) 
            return JsonResponse(modalidade_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE': 
            modalidade.delete()
        return JsonResponse({'message': 'Modalidade deletada com Sucesso!'}, status=status.HTTP_204_NO_CONTENT)
    except Modalidade.DoesNotExist: 
        return JsonResponse({'message': 'A modalidade não existe'}, status=status.HTTP_404_NOT_FOUND) 
    
        
@api_view(['GET'])
def modalidade_lista_publicada(request):
    # GET todas as modalidades publicadas
    modalidades = Modalidade.objects.filter(published=True)
        
    if request.method == 'GET': 
        modalidades_serializer = ModalidadeSerializer(modalidades, many=True)
        return JsonResponse(modalidades_serializer.data, safe=False)