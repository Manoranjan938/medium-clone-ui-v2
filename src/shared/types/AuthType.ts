export interface AuthResponse {
  access_token: string;
  profile_img: string;
  username: string;
  fullname: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface AuthPageType {
  type: "sign-in" | "sign-up";
}
