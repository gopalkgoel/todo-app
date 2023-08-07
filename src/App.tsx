import { useState } from "react";
import './styles.css';
import Row from "./Row";
import { ListItem } from './types'; 
import { RowProps } from './types'; 

export default function App() {
  const [usrInput, setUsrInput] = useState("");
  const [items, setItems] = useState<ListItem[]>([]);

  const addItem = () => {
    if(usrInput) {
      const newItem: ListItem = { id: Date.now(), text: usrInput };
      setItems(prevItems => [...prevItems, newItem]);
      setUsrInput('');
    }
  };

  const removeItem = ({id, text}: ListItem) => {
    console.log("YAY DELETE");
  };

  return (
    <div className="App">
      <input
        autoFocus
        className = "mainInput"
        value={usrInput}
        onChange={(e) => setUsrInput(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==='Enter') {
            addItem();
          }
        }}
      />
      <div>
        {items.map(item => (
          // <li key={item.id}>{item.text}</li>
          <Row key={item.id} id={item.id} text={item.text} onClickHandler={removeItem}/>
        ))}
      </div>
    </div>
  );
}
