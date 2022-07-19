/** Модель для формы входа пользователя */
export interface IForgotPasswordFormProps {
  /** Функция для авторизации на событие onSubmit */
  forgotPassword: (user: IForgotPasswordModel) => Promise<void>;
}

/** Форма для авторизации пользователя */
export interface IForgotPasswordModel {
  /** Электронная почта */
  email: string;
}
