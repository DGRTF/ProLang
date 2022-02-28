/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ChangePasswordModel, ProblemDetails, RegisterUserModel, SucceededAuthorize } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Authorize<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeMyMethod
   * @request GET:/api/Authorize/MyMethod
   */
  authorizeMyMethod = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Authorize/MyMethod`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeGetToken
   * @request GET:/api/Authorize/GetToken/token
   */
  authorizeGetToken = (query?: { Email?: string | null; Password?: string | null }, params: RequestParams = {}) =>
    this.request<SucceededAuthorize, ProblemDetails>({
      path: `/api/Authorize/GetToken/token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeRegisterUser
   * @request POST:/api/Authorize/RegisterUser
   */
  authorizeRegisterUser = (user: RegisterUserModel, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Authorize/RegisterUser`,
      method: "POST",
      body: user,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeConfirmEmail
   * @request GET:/api/Authorize/ConfirmEmail
   */
  authorizeConfirmEmail = (query?: { Email?: string | null; Token?: string | null }, params: RequestParams = {}) =>
    this.request<SucceededAuthorize, ProblemDetails>({
      path: `/api/Authorize/ConfirmEmail`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeForgotPassword
   * @request GET:/api/Authorize/ForgotPassword
   */
  authorizeForgotPassword = (query?: { email?: string | null }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Authorize/ForgotPassword`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeResetPassword
   * @request GET:/api/Authorize/ResetPassword
   */
  authorizeResetPassword = (query?: { Email?: string | null; Token?: string | null }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Authorize/ResetPassword`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Authorize
   * @name AuthorizeChangePassword
   * @request PUT:/api/Authorize/ChangePassword
   */
  authorizeChangePassword = (model: ChangePasswordModel, params: RequestParams = {}) =>
    this.request<SucceededAuthorize, ProblemDetails>({
      path: `/api/Authorize/ChangePassword`,
      method: "PUT",
      body: model,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
