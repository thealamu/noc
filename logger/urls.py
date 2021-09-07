from django.urls import path
from . import views

urlpatterns = [
    # Logger
    path("", view=views.index, name="index"),
]
