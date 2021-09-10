from django.shortcuts import render
from logger.models import CallLog

# Create your views here.
def index(request):
    logs = CallLog.objects.all().order_by("-id")
    return render(request, "history/index.html", {"logs": logs})
