from django.urls import path, include
from . import views#从本集导入views

app_name = 'myauth'
urlpatterns = [
    path('',views.主页,name='主页' ),
    path('login/',views.登录,name='登录' ),
    path('logout/',views.登出,name='登出' ),
]
