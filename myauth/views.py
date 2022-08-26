from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


# Create your views here.
def 主页(request):
    return render(request, 'myauth/home.html')


def 登录(request):
    if request.method == 'POST':
        user = authenticate(request, username=request.POST['用户名'], password=request.POST['密码'])
        if user is None:
            return render(request, 'myauth/login.html', {'错误': '用户名或密码错误'})
        else:
            login(request, user)
            return redirect('myauth:主页')
    else:
        return render(request, 'myauth/login.html')

def 登出(request):
    logout(request)
    return redirect("myauth:主页")