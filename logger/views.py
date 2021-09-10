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
        data["time_booked"] = datetime.fromtimestamp(data["time_booked"])
        data["time_connected"] = datetime.fromtimestamp(data["time_connected"])
        data["time_finished"] = datetime.fromtimestamp(data["time_finished"])

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
