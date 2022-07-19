/** Модель для формы входа пользователя */
export interface ILogInFormProps {
  /** Функция для авторизации на событие onSubmit */
  logInUser: (user: ILoginUserModel) => Promise<void>;
}

/** Форма для авторизации пользователя */
export interface ILoginUserModel {
  /** Электронная почта */
  email: string;

  /** Пароль */
  password: string;
}
