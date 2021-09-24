from django.shortcuts import render
from logger.models import CallLog
from datetime import datetime, timedelta

# Create your views here.
def index(request):
    report_range = request.GET.get("range")

    if report_range.trim() == "":
        report_range = "weekly"

    report_range = report_range.lower()
    since = None
    if report_range == "weekly":
        # get time of last sunday 12am
        today = datetime.today()
        since = today - timedelta(days=7)
    elif report_range == "monthly":
        # get the timestamp of the first day of the month
        today = datetime.today()
        since = datetime(today.year, today.month, 1)

    # get all call logs since 'since'
    call_logs = CallLog.objects.filter(created_at__gte=since)
