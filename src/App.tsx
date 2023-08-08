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
      setItems([...items, newItem]);
      setUsrInput('');
    }
  };

  const removeItem = ({id, text}: ListItem) => {
    //console.log(text);
    const item: ListItem = {
      id: id,
      text: text,
    };
    const index = items.findIndex((element) => element.id===id);
    //console.log(index)
    setItems((prevItem) => prevItem.filter((item,i) => i!==index));
  };

  const deleteAll = () => {
    setItems([]);
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
      <button onClick={deleteAll} className="Button"></button>
      <div>
        {items.map(item => (
          <Row key={item.id} id={item.id} text={item.text} onClickHandler={removeItem}/>
        ))}
      </div>
    </div>
  );
}
