export const UserDTOValidationMessage = {
  name: {
    min: 'Name must be at least 1 characters long',
    max: 'Name must be at most 15 characters long',
  },

  email: {
    isEmail: 'Email must be a valid email',
  },

  avatar: {
    isString: 'Avatar must be a string',
  },

  password: {
    min: 'Password must be at least 6 characters long',
    max: 'Password must be at most 12 characters long',
  },

  isPro: {
    isBoolean: 'Is pro must be a boolean',
  },
};
