import { FormEventHandler } from 'react';

export interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
  header?: string;
  buttonsSection?: React.ReactNode;
}
