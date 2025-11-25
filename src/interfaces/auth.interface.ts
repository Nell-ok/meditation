export interface User {
  id: number;
  email: string;
  username: string;
}

export interface RegisterResponse {
  data: User;
  message: string;
  status: string;
}

export interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
  message: string;
  status: string;
}
