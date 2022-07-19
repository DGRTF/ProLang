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

export interface SucceededAuthorize {
  token: string;
}

export interface ProblemDetails {
  type?: string;
  title?: string;

  /** @format int32 */
  status?: number;
  detail?: string;
  instance?: string;
}

export interface RegisterUserModel {
  email: string;
  password: string;
}

export interface ChangePasswordModel {
  email: string;
  password: string;
  newPassword: string;
}
