import usersMock from './mocks/users';

export function getAllUsers(fnCallback) {
  return fnCallback(usersMock);
};
