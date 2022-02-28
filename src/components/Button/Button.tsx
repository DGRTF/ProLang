import React from 'react';
import './Button.scss';

export class ButtonProps {
  name?: string = '';

  handler?: (ev: React.MouseEvent) => void;

  type?: 'button' | 'submit' | 'reset' = 'button';
}

export default function Button(props: ButtonProps) {
  return (
    <button type={props.type} className="button" onClick={props.handler}>
      {props.name ? props.name : ''}
    </button>
  );
}
