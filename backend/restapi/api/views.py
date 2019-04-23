from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from .models import User, Tag, Event, EventsOfUser
from .serializers import UserSerializer, TagSerializer, EventSerializer, UserJoinToEventSerializer
from .permissions import IsLoggedInUserOrAdmin, IsAdminUser

from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'retrieve' or self.action == 'list':
            permission_classes = [AllowAny]
        elif self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'retrieve':
            permission_classes = [AllowAny]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class EventsForUsers(viewsets.ViewSet):
    # Looking for event by tags
    def list(self, request):
        tag = self.request.query_params.get('tag')
        queryset = Event.objects.filter(tag=Tag.objects.get(tag_name=tag))
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)


class ReturnEventsOfUser(viewsets.ViewSet):
    # return events of user
    def list(self, request):

        event_IDs = EventsOfUser.objects.filter(user_id=request.query_params.get("user_id"))
        queryset = []
        for i in event_IDs:
            queryset.append(Event.objects.get(pk=i.id))
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)


class UserJoinToEvent(viewsets.ModelViewSet):
    # Adding or changing taking part by user,
    queryset = EventsOfUser.objects.all()
    serializer_class = UserJoinToEventSerializer
