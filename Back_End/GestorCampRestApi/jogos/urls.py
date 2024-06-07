from django.urls import re_path as url
from jogos import views 
 
urlpatterns = [ 
    url(r'^api/jogos$', views.jogo_lista),
    url(r'^api/jogos/(?P<pk>[0-9]+)$', views.jogo_detalhe),
    url(r'^api/jogos/publicado$', views.jogo_lista_publicada)
]