from django.contrib import admin
from hotels.models import Photos

from plans.models import Destination, Include_plan, No_include, Notes, Photos_destination, Plan

# Register your models here.

admin.site.register([Destination, Plan, Photos_destination, Include_plan, No_include, Notes])