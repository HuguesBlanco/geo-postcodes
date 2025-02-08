import { HiUserCircle } from 'react-icons/hi2';

type UserAvatarProps = {
  userEmail: string;
  organizationName: string;
  avatarURL: string | null;
};

function UserAvatar({
  userEmail,
  organizationName,
  avatarURL,
}: UserAvatarProps): React.JSX.Element {
  return (
    <div className="flex items-center">
      <div className="text-right mr-2">
        <div className="text-sm leading-tight">{userEmail}</div>
        <div className="text-sm leading-tight font-bold">
          {organizationName}
        </div>
      </div>
      <div className="h-10 w-10 flex-shrink-0">
        {avatarURL !== null ? (
          <img
            src={avatarURL}
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
