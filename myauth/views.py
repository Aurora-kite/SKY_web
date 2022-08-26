from django.shortcuts import render

# Create your views here.
def 主页(请求):
    return render(请求,'myauth/home.html')