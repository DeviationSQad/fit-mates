from django.conf.urls import url, include
from rest_framework import routers
from .views import UsersViewSet

router = routers.DefaultRouter()
router.register(r'users', UsersViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_framework.urls')),
]