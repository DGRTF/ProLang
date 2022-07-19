import React, { Children } from 'react';
import { ListProps } from './ListInterfaces';
import './List.scss';

export default function List(props: ListProps) {
  return (
    <div className="list">
      <div className="list__header">
        <h4>{props.header}</h4>
      </div>
      <div className="list__content">
        {Children.toArray(props.children).map((x) => x)}
      </div>
    </div>
  );
}
