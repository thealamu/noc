import json

from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    """Index page of the logger app."""
    return render(request, "logger/index.html")


def call_log(request):
    print("Trace 1")
    if request.method == "POST":
        """Save log to the database"""
        data = json.loads(request.body)
        print(data)
        return HttpResponse(json.dumps(data))
