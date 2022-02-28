export const passwordMinLength = 8;
export const passwordMinLengthErrorMessage = `Password must be minimum ${passwordMinLength} symbols`;

export const passwordMaxLength = 36;
export const passwordMaxLengthErrorMessage = `Password must be maximum ${passwordMaxLength} symbols`;

export const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/;
export const passwordErrorMessage = 'Должен содержать один из символов: !@#$%^&* ,цифры, а так же заглавные и прописные латинские буквы';
