import { useState } from "react";
import './styles.css';

function App() {
  const [usrInput, setUsrInput] = useState("");

  return (
    <div className="App">
      <input
        autoFocus
        className = "mainInput"
        value={usrInput}
        onChange={(e) => setUsrInput(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==='Enter' && usrInput) {
            console.log(usrInput);
            setUsrInput('');
          }
        }}
      />
    </div>
  );
}

export default App;
