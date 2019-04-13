from rest_framework import serializers
from .models import User, UserProfile, Event, Tag


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('dob', 'bio', 'country', 'city', 'tag1', 'tag2', 'tag3', 'tag4')


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        UserProfile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.dob = profile_data.get('dob', profile.dob)
        profile.bio = profile_data.get('bio', profile.bio)
        profile.country = profile_data.get('country', profile.country)
        profile.city = profile_data.get('city', profile.city)
        profile.tag1 = profile_data.get('tag1', profile.tag1)
        profile.tag2 = profile_data.get('tag2', profile.tag2)
        profile.tag3 = profile_data.get('tag3', profile.tag3)
        profile.tag4 = profile_data.get('tag4', profile.tag4)
        profile.save()

        return instance


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'tag_name')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'creator', 'tag', 'created', 'title', 'place_name',
                  'country', 'city', 'address', 'event_date', 'max_amount_of_people')

