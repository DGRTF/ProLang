/** Модель для формы входа пользователя */
export interface IChangePasswordFormProps {
  /** Функция для авторизации на событие onSubmit */
  changePassword: (user: IChangePasswordModel) => Promise<void>;
}

/** Форма для авторизации пользователя */
export interface IChangePasswordModel {
  /** Электронная почта */
  email: string;

  /** Пароль */
  password: string;

  /** Новый пароль */
  newPassword: string;
}
