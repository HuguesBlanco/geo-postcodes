// src/services/userServices.ts
import { User } from '../types/userTypes';

export async function fetchUserInfo(): Promise<User> {
  const fakeUserInfo: User = {
    userEmail: 'John.Doe@email.com',
    organizationName: 'Acme',
    avatarURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg/205px-Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg',
  };

  // Simulate network delay.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return fakeUserInfo;
}
