import json

from django.http.response import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from datetime import datetime
from . import models

# Create your views here.
@login_required
def index(request):
    """Index page of the logger app."""
    return render(request, "logger/index.html")


@login_required
def call_log(request):
    if request.method == "POST":
        """Save log to the database"""
        data = json.loads(request.body)

        # convert the timestamps to datetime
        timestamp_booked = data["time_booked"]
        timestamp_connected = data["time_connected"]
        timestamp_finished = data["time_finished"]

        data["time_booked"] = datetime.fromtimestamp(timestamp_booked) if timestamp_booked else None
        data["time_connected"] = datetime.fromtimestamp(timestamp_connected) if timestamp_connected else None
        data["time_finished"] = datetime.fromtimestamp(timestamp_finished) if timestamp_finished else None

        (
            extn,
            fullname,
            budget,
            destination,
            is_official,
            is_international,
            time_booked,
            time_connected,
            time_finished,
            remark,
        ) = data.values()

        call_details = models.CallLog(
            extn=extn,
            fullname=fullname,
            budget=budget,
            destination=destination,
            is_official=is_official,
            is_international=is_international,
            time_booked=time_booked,
            time_connected=time_connected,
            time_finished=time_finished,
            remark=remark,
        )
        call_details.save()

        return HttpResponse("OK", status=201)
