import { UserPasswordInput } from '../resolvers/UserPasswordInput';

export const validateRegister = (options: UserPasswordInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'invalid email',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'cannot include an @',
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: `lenght is too short, it must be greater than 2 characters`,
      },
    ];
  }

  if (options.password.length <= 3) {
    return [
      {
        field: 'password',
        message: `lenght is too short, it must be greater than 3 characters`,
      },
    ];
  }

  return null;
};
