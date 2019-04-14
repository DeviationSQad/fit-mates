from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class User(AbstractUser):
    username = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.email)


class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    dob = models.DateField(blank=True, null=True)
    bio = models.CharField(max_length=300, default='', blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=75, blank=True, null=True)
    tag1 = models.CharField(max_length=50, blank=True, null=True)
    tag2 = models.CharField(max_length=50, blank=True, null=True)
    tag3 = models.CharField(max_length=50, blank=True, null=True)
    tag4 = models.CharField(max_length=50, blank=True, null=True)


class Tag(models.Model):
    tag_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return str(self.pk)


class Event(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modificed = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    place_name = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=75)
    address = models.CharField(max_length=100)
    event_date = models.CharField(max_length=15)
    max_amount_of_people = models.IntegerField(blank=True)


class EventsOfUser(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)


class UserHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
