import { IChangePasswordModel } from '../../components/ChangePassword/ChangePasswordFormInterfaces';
import { IForgotPasswordModel } from '../../components/ForgotPasswordForm/ForgotPasswordFormInterfaces';
import { ILoginUserModel } from '../../components/LogInForm/LogInFormInterfaces';
import { RegisterUser } from '../../components/RegistrationForm/RegistrationFormProps';
import { Authorize } from '../generate/Authorize';
import { SucceededAuthorize } from '../generate/data-contracts';
import { HttpResponse } from '../generate/http-client';
import { queryProvider } from '../queryProider';

const authContext = queryProvider(Authorize);
/**
 * Регистрация пользователя
 * @param user Модель регистрации пользователя пользователя
 */
export async function registration(user: RegisterUser): Promise<void> {
  const response = await authContext.authorizeRegisterUser({ ...user });

  await emptyResponseHandler(response);
}

/**
 * Вход пользователя
 * @param user Модель входа пользователя
 */
export async function login(user: ILoginUserModel): Promise<void> {
  const response = await authContext.authorizeGetToken({
    Email: user.email,
    Password: user.password,
  });

  await tokenResponseHandler(response);
}

export async function forgotPassword(user: IForgotPasswordModel): Promise<void> {
  const response = await authContext.authorizeForgotPassword({ ...user });

  await emptyResponseHandler(response);
}

/**
 * Смена пароля
 * @param user Модель смены пароля
 */
export async function changePassword(user: IChangePasswordModel): Promise<void> {
  const response = await authContext.authorizeChangePassword({ ...user });

  await tokenResponseHandler(response);
}

/**
 * Обработчик ответа с пустым ответом
 * @param response Ответ сервера
 * @returns
 */
async function emptyResponseHandler<TError>(
  response: HttpResponse<void, TError>,
): Promise<void> {
  if (response.ok) return;

  showError(response.status.toString(), await response.text());
}

/**
 * Обработчик ответа с токеном
 * @param response Ответ сервера
 */
async function tokenResponseHandler<TError>(
  response: HttpResponse<SucceededAuthorize, TError>,
) {
  if (response.ok) sessionStorage.setItem('token', response.data.token);

  showError(response.status.toString(), await response.text());
}

/**
 * Вызывает всплывающее окно через store с кодом ошибки и текстом
 * @param header Заголовок всплывающего окна
 * @param message Сообщение
 */
function showError(header: string, message: string) {}
