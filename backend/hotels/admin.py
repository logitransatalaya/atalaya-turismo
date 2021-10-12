from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register([Hotel,National_city,Review, Service, Photos])
