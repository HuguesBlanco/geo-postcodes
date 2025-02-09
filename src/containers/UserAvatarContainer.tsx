import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchUserInfo } from '../services/userServices';
import { User } from '../types/userTypes';
import UserAvatar from '../ui/elements/UserAvatar';

function UserAvatarContainer(): React.JSX.Element {
  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery<User>({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
  });

  // TODO: implement proper handling of errors and loading.

  if (isLoading) {
    return <p>Loading user information...</p>;
  }

  if (error) {
    return <p>Error fetching user information: {error.message}</p>;
  }

  const fallbackUserInfo: User = {
    userEmail: '',
    organizationName: '',
    avatarURL: null,
  };

  return <UserAvatar userInfo={userInfo ?? fallbackUserInfo} />;
}

export default UserAvatarContainer;
