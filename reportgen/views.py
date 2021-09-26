from django.shortcuts import render
from logger.models import CallLog
from datetime import datetime, timedelta
from openpyxl import Workbook
from django.http import HttpResponse
from tempfile import NamedTemporaryFile

# Create your views here.
def index(request):
    report_range = request.GET.get("range")

    if report_range.strip() == "":
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
    call_logs = CallLog.objects.filter(time_booked__gte=since)

    wb = Workbook()
    ws = wb.active  # active sheet

    i, j = 1, 1
    # walk through all call logs, and add them to the sheet
    for call_log in call_logs:
        ws.cell(row=i, column=j).value = call_log.fullname
        ws.cell(row=i, column=j + 1).value = call_log.extn
        ws.cell(row=i, column=j + 2).value = call_log.destination
        ws.cell(row=i, column=j + 3).value = call_log.budget
        ws.cell(row=i, column=j + 4).value = call_log.remark
        i += 1

    # send the file to the browser
    response = HttpResponse(
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    response["Content-Disposition"] = "attachment; filename=report.xlsx"
    with NamedTemporaryFile() as tmp:
        wb.save(tmp.name)
        tmp.seek(0)
        response.write(tmp.read())
    return response
