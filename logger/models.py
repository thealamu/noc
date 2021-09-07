from django.db import models

# Create your models here.
class CallDetails(models.Model):
    extn = models.IntegerField(max_length=4)
    name = models.CharField(max_length=100)
    budget = models.IntegerField(max_length=4)
    destination = models.CharField(max_length=100)
    is_official = models.BooleanField(default=True)
    is_international = models.BooleanField(default=True)
    time_booked = models.DateTimeField()
    time_connected = models.DateTimeField()
    time_finished = models.DateTimeField()
    remark = models.CharField(max_length=20)
