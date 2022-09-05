from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


# Create your views here.
def home(request):
    return render(request, 'myauth/home.html')


def signin(request):
    if request.method == 'POST':
        user = authenticate(request, username=request.POST['用户名'], password=request.POST['密码'])
        if user is None:
            return render(request, 'myauth/login.html', {'错误': '用户名或密码错误'})
        else:
            login(request, user)
            return redirect('myauth:home')
    else:
        return render(request, 'myauth/login.html')

def signout(request):
    logout(request)
    return redirect("myauth:home")