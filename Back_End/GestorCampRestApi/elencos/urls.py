from django.urls import re_path as url
from elencos import views 
 
urlpatterns = [ 
    url(r'^api/elencos$', views.elenco_lista)
]