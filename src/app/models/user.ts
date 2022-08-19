export interface UserCredential {
  email: string;
  password: string;
  sendEmailVerification: boolean;
}

export interface UserProfile {
  email: string;
  fullName: string;
  address: string;
}
