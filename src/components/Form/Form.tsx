import React, { Children } from 'react';
import ItemContainer from '../ItemContainer/ItemContainer';
import List from '../List/List';
import { FormProps } from './FormInterfaces';
import './Form.scss';

export default function Form(props: FormProps) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <List header={props.header}>
        {Children.toArray(props.children)
          .map((x, i) => <ItemContainer key={i}>{x}</ItemContainer>)
          .concat(
            props.buttonsSection ? (
              <ItemContainer key={-1} margin="1em 0 1em 0">
                {props.buttonsSection}
              </ItemContainer>
            ) : (
              []
            ),
          )}
      </List>
    </form>
  );
}
