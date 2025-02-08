import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../services/UserServices';
import { FetchResult } from '../types/fetchTypes';
import { User } from '../types/userTypes';
import UserAvatar from '../ui/elements/UserAvatar';

function UserAvatarContainer(): React.JSX.Element {
  const [userResult, setUserInfo] = useState<null | FetchResult<User>>(null);
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

  const userInfo =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
    !isLoading && userResult && userResult.isSuccess === true
      ? userResult.data
      : { userEmail: '', organizationName: '', avatarURL: null };

  return <UserAvatar userInfo={userInfo} />;
}

export default UserAvatarContainer;
