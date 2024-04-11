export interface AuthModel {
  userDetails: UserDetails;
}

interface UserDetails {
  access_token: string;
  fullname: string;
  profile_img: string;
  username: string;
}
