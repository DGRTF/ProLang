import React, { FormEventHandler } from 'react';
import './TextField.scss';

type inputType = 'password' | 'text' | 'email';

export interface ITextFieldSubText {
  text?: string;
  type: 'invalid' | 'valid';
}

export interface TextFieldProps {
  onInput?: FormEventHandler<HTMLInputElement>;
  header?: string;
  defaultValue?: string;
  readonly?: boolean;
  nameField: string;
  type?: inputType;
  required?: boolean;
  subText?: ITextFieldSubText;
}

export default function TextField(props: TextFieldProps) {
  return (
    <label className="text-field">
      {props.header ?? ''}
      <input
        name={props.nameField}
        className="text-field__field"
        readOnly={props.readonly ?? false}
        required={props.required ?? false}
        defaultValue={props.defaultValue ?? ''}
        type={props.type ?? 'text'}
        onInput={props.onInput}
      />
      <span
        className={`text-field__subtext${
          props.subText?.type === 'invalid' ? '_red' : ''
        }`}
      >
        {props.subText?.text ?? ''}
      </span>
    </label>
  );
}
