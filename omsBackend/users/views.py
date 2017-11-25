# -*- coding: utf-8 -*-
# author: kiven

from users.serializers import UserSerializer, GroupSerializer, RoleSerializer
from rest_framework import viewsets

from users.filters import UserFilter, GroupFilter, RoleFilter
from users.models import User, Group, Role


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_class = UserFilter
    ordering_fields = ('-create_date',)


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    filter_class = GroupFilter


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_class = RoleFilter
