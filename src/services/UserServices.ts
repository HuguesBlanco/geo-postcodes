import { FetchResult, ServiceReturn } from '../types/fetchTypes';
import { User } from '../types/userTypes';

export function getUserInfo(): ServiceReturn<User> {
  // This function mock the fetching of User data.

  const mockedUserInfo: User = {
    userEmail: 'John.Doe@email.com',
    organizationName: 'Acme',
    avatarURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg/205px-Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg',
  };

  const fakeResult = new Promise<FetchResult<User>>((resolve) => {
    setTimeout(() => {
      resolve({
        isSuccess: true,
        data: mockedUserInfo,
      });
    }, 500);
  });

  const abortFakely = (): void => {
    console.log('User Info fetch aborted');
  };

  return { result: fakeResult, abort: abortFakely };
}
