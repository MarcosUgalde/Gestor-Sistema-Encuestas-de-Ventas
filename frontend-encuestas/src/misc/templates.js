export const login = {
  email: {
    validation: {
      required: true,
    },
  },
  username: {
    validation: {
      required: true,
    },
  },
  password: {
    validation: {
      required: true,
      minLength: 4,
    },
  },
  errors: {
    required: "This field is mandatory",
    minLength: "4 length at least is required",
  },
};
