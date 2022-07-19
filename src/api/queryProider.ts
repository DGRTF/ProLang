import { HttpClient } from './generate/http-client';

export function queryProvider<TQueryClass extends HttpClient>(queryClass: {
  new(): TQueryClass
}): TQueryClass {
  const objectRequest = new queryClass();
  objectRequest.baseUrl = process.env.REACT_APP_URI_API as string;

  return objectRequest;
}
