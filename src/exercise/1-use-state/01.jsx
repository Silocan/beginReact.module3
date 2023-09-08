// 🦁 add useState import
import { useState } from "react";

const App = () => {
  // 🦁 Remplace le name par un state
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [nameHistory, setNameHistory] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
    setNameHistory(current => [...current, event.target.value]);
    // 🦁 Update le state avec la nouvelle valeur
    // 💡 `event.target.value`
  };

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  }

  const deleteHistory = (index) => {
    setNameHistory((current) => {
      current.splice(index, 1);
      return [...current];
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <p>{name ? 'Hello ' + (isChecked ? name.split("").reverse().join("") : name) : 'Write your name'}</p>
      <ul>
        {nameHistory.map((history, index) => <li key={index} onClick={() => deleteHistory(index)}>{history}</li>)}
      </ul>
    </div>
  );
};

export default App;
