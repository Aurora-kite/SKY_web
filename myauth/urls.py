from django.urls import path, include
from . import views#从本集导入views

app_name = 'myauth'
urlpatterns = [
    path('',views.home,name='home' ),
    path('login/',views.signin,name='signin' ),
    path('logout/',views.signout,name='signout' ),
]
