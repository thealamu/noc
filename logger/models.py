from django.db import models

# Create your models here.
class CallLog(models.Model):
    extn = models.IntegerField()
    fullname = models.CharField(max_length=100)
    budget = models.CharField(max_length=20)
    destination = models.CharField(max_length=100)
    is_official = models.BooleanField(default=True)
    is_international = models.BooleanField(default=True)
    time_booked = models.DateTimeField(null=True)
    time_connected = models.DateTimeField(null=True)
    time_finished = models.DateTimeField(null=True)
    remark = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.fullname}({self.extn}) called {self.destination} - {self.remark}"
