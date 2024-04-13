from django.urls import re_path as url
from campeonatos import views 
 
urlpatterns = [ 
    url(r'^api/campeonatos$', views.campeonato_lista),
    url(r'^api/campeonatos/(?P<pk>[0-9]+)$', views.campeonato_detalhe),
    url(r'^api/campeonatos/publicado$', views.campeonato_lista_publicada)
]