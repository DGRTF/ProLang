import React from 'react';
import { ItemContainerProps } from './ItemContainerInterfaces';
import './ItemContainer.scss';

export default function ItemContainer(props: ItemContainerProps) {
  return (
    <div className="item-container" style={{ margin: props.margin ?? '0 0 1em 0' }}>
      {props.children}
    </div>
  );
}
