from django.urls import re_path as url
from modalidades import views 
 
urlpatterns = [ 
    url(r'^api/modalidades$', views.modalidade_lista),
    url(r'^api/modalidades/(?P<pk>[0-9]+)$', views.modalidade_detalhe),
    url(r'^api/modalidades/publicado$', views.modalidade_lista_publicada)
]