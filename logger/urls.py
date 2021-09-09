from django.urls import path
from . import views

urlpatterns = [
    # Logger
    path("log", view=views.call_log),
    path("", view=views.index, name="index"),
]
