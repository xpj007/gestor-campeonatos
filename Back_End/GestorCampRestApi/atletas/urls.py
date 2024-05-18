from django.urls import re_path as url
from atletas import views 
 
urlpatterns = [ 
    url(r'^api/atletas$', views.atleta_lista),
    url(r'^api/atletas/(?P<pk>[0-9]+)$', views.atleta_detalhe),
    url(r'^api/atletas/publicado$', views.atleta_lista_publicada)
]