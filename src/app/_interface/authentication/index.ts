export interface IAuthenticationRegister {
    email: {
      value: string;
      error: boolean;
    };
    name: {
      value: string;
      error: boolean;
    };
    password: {
      value: string;
      error: boolean;
    };
    confirmPassword: {
      value: string;
      error: boolean;
    };
}

export interface IAuthenticationLogin{
  email: {
    value: string;
    error: boolean;
  };
  password: {
    value: string;
    error: boolean;
  };
}