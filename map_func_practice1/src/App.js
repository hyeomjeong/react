import React, { useState } from 'react';

const App = () => {
  const [ names, setNames ] = useState([
    {id: 1, text: "봄"},
    {id: 2, text: "여름"},
    {id: 3, text: "가을"},
    {id: 4, text: "겨울"},
  ]);
  
  const [ nextInput, setNextInput ] = useState('');
  const [ nextID, setNextID ] = useState(5);

  const handleChange = (e) => setNextInput(e.target.value);
  

  const handleClick = () =>{
    const nextNames = names.concat({
      id: nextID,
      text: nextInput
    });
      
    setNames(nextNames);
    
    setNextID(nextID + 1);
    setNextInput('');
  };

  // delete method
  const onRemove = (id) => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

  return(
    <div>
      <input value={nextInput} name="nextInput" placeholder="anything..." onChange={handleChange}></input>
      <button onClick={handleClick}>ADD</button>
      {nameList}
    </div>
  );
};

export default App;