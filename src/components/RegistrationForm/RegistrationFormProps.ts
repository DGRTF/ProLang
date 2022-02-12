export default interface RegistrationFormProps {
  registrationUser: (user: RegisterUser) => Promise<void>;
}

export interface RegisterUser {
  email: string;
  password: string;
}

export interface LoginUserModel {
  Email: string;
  Password: string;
}

export interface ForgotPasswordModel{
  email: string;
}

export interface ChangePasswordModel{
  email: string;
  password: string;
  newPassword: string;
}

export interface SucceededAuthorizeResponse {
  token: string;
}
