from django.urls import re_path as url
from equipes import views 
 
urlpatterns = [ 
    url(r'^api/equipes$', views.equipe_lista),
    url(r'^api/equipes/(?P<pk>[0-9]+)$', views.equipe_detalhe),
    url(r'^api/equipes/publicado$', views.equipe_lista_publicada)
]