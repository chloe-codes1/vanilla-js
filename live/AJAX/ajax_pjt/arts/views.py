from django.shortcuts import render
from django.http import JsonResponse

import art 

# Create your views here.
def ping(request):
    return render(request, 'arts/ping.html')

def pong(request):
    user_input = request.GET.get('inputText')
    art_text = art.text2art(user_input)
    data = {
        'success': True,
        'content': art_text,
    }
    return JsonResponse(data)