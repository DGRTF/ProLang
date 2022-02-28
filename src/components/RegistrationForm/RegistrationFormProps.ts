export default interface RegistrationFormProps {
  registrationUser: (user: RegisterUser) => Promise<void>;
};

export interface RegisterUser {
  email: string;
  password: string;
}
