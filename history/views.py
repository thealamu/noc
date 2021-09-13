from django.db.models import Q
from django.shortcuts import render
from logger.models import CallLog

# Create your views here.
def index(request):
    logs = CallLog.objects.all()
    filtered = False

    query = request.GET.get("q")
    if query:
        logs = logs.filter(
            Q(fullname__icontains=query)
            | Q(extn__icontains=query)
            | Q(budget__icontains=query)
            | Q(destination__icontains=query)
        ).order_by("-id")
        filtered = True

    return render(request, "history/index.html", {"logs": logs, "filtered": filtered})
