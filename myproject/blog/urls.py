# blog/urls.py
from django.urls import path
from .views import index, about, post_detail  # Make sure 'about' is imported

urlpatterns = [
    path('', index, name='blog_home'),  # Set the homepage
    path('about/', about, name='about'),  # About page URL
    path('post/<int:post_id>/', post_detail, name='post_detail'),
]





