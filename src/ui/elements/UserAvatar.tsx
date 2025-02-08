import { HiUserCircle } from 'react-icons/hi2';
import { User } from '../../types/userTypes';

type UserAvatarProps = {
  userInfo: User;
};

function UserAvatar({ userInfo }: UserAvatarProps): React.JSX.Element {
  return (
    <div className="flex items-center">
      <div className="text-right mr-2">
        <div className="text-sm leading-tight">{userInfo.userEmail}</div>
        <div className="text-sm leading-tight font-bold">
          {userInfo.organizationName}
        </div>
      </div>
      <div className="h-10 w-10 flex-shrink-0">
        {userInfo.avatarURL !== null ? (
          <img
            src={userInfo.avatarURL}
            className="h-full w-full object-cover rounded-full"
            alt="User avatar"
          />
        ) : (
          <HiUserCircle className="h-full w-full" />
        )}
      </div>
    </div>
  );
}

export default UserAvatar;
