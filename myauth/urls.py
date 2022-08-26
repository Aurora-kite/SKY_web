from django.urls import path, include
from . import views#从本集导入views

urlpatterns = [
    path('',views.主页,name='主页' ),
]
