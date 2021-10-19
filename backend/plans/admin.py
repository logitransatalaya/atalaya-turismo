from django.contrib import admin

from plans.models import Destination, Plan

# Register your models here.

@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ['id', 'destination', 'url_image']

@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ['id', 'destination_name', 'url_img', 'description', 'id_destination']
