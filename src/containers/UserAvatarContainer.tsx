import React from 'react';
import UserAvatar from '../ui/elements/UserAvatar';

function UserAvatarContainer(): React.JSX.Element {
  // Fetch data from profile here.

  return (
    <UserAvatar
      userEmail="user@email.com"
      organizationName="Acme"
      avatarURL={null}
    />
  );
}

export default UserAvatarContainer;
