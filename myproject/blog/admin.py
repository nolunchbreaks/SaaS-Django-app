from django.contrib import admin

# Register your models here.
from .models import Post  # Import your model

admin.site.register(Post)  # Register your model