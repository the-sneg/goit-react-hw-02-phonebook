import React from 'react';
import s from './ContactItem.module.css';

export const ContactItem = ({ item, onDeleteClick }) => {
  return (
    <li className={s.item}>
      {item.name} : {item.number}
      <button
        type="button"
        className={s.delete}
        onClick={() => onDeleteClick(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
