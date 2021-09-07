from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    """Index page of the logger app."""
    return render(request, "logger/index.html")
