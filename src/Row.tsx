import { useState } from "react";
import './styles.css';
import { ListItem } from './types';
import { RowProps } from './types';


export default function Row({id, text, onClickHandler}: RowProps) {
  const item: ListItem = {
    id: id,
    text: text,
  };

  return(
    <div key={id} className="Row">
      <button onClick={()=>onClickHandler(item)} className="Button"></button>
      {text}
    </div>
  );
}