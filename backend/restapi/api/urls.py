from django.conf.urls import url, include
from rest_framework import routers
from .views import UsersViewSet, TagsViewSet, EventsViewSet, EventsForUsers, ReturnEventsOfUser, UserJoinToEvent

# Every URL described in docs
router = routers.DefaultRouter()
router.register(r'users', UsersViewSet)
router.register(r'tags', TagsViewSet)
router.register(r'events', EventsViewSet)
router.register(r'userEvents', EventsForUsers, basename="Event_Users")
router.register(r'returnEventsOfUser', ReturnEventsOfUser, basename="Events_of_User")
router.register(r'userJoinToEvent', UserJoinToEvent)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_auth.urls'))
]
