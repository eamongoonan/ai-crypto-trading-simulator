from django.contrib import admin
from .models import CryptoCoin
from .models import PlatformUser
from .models import Position
from .models import NewsItem


class CryptoCoinAdmin(admin.ModelAdmin):
    list_display = ('name', 'symbol')


# Register your models here.
admin.site.register(CryptoCoin, CryptoCoinAdmin)
admin.site.register(PlatformUser)
admin.site.register(Position)
admin.site.register(NewsItem)
