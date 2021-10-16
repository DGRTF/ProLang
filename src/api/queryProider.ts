export function queryProvider<TQueryClass>(queryClass: {
  new(host: string | undefined): TQueryClass
}): TQueryClass {
  return new queryClass(process.env.REACT_APP_URI_API);
}
