from django.conf.urls import url, include
from rest_framework import routers
from .views import UsersViewSet, TagsViewSet, EventsViewSet

router = routers.DefaultRouter()
router.register(r'users', UsersViewSet)
router.register(r'tags', TagsViewSet)
router.register(r'events', EventsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_auth.urls'))
]
