import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../services/UserServices';
import { FetchResult } from '../types/fetchTypes';
import { User } from '../types/userTypes';
import UserAvatar from '../ui/elements/UserAvatar';

function UserAvatarContainer(): React.JSX.Element {
  const [userInfo, setUserInfo] = useState<null | FetchResult<User>>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { result: userResult, abort } = getUserInfo();

    void userResult
      .then((result) => {
        setUserInfo(result);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return abort;
  }, []);

  const { userEmail, organizationName, avatarURL } =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
    !isLoading && userInfo && userInfo.isSuccess === true
      ? userInfo.data
      : { userEmail: '', organizationName: '', avatarURL: null };

  return (
    <UserAvatar
      userEmail={userEmail}
      organizationName={organizationName}
      avatarURL={avatarURL}
    />
  );
}

export default UserAvatarContainer;
