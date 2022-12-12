type InitialState = {
  users: Users;
};

type Users = {
  loading: boolean;
  data?: any;
  error?: any;
};