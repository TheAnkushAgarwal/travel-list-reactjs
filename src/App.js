import { useState } from "react";
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 4, packed: true },
];



export default function App() {
  const[items,setItems] = useState(initialItems);
  

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    console.log(id);
    setItems((items)=>items.filter((item)=> item.id !== id))
  }

  function handleToggleItem(id){
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed}: item))
  }

  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to delete all items?");

    if(confirmed)
      setItems([]);
  }

  return (
    <div className="app">
      <Logo/>
      <Form onAddItems = {handleAddItems}/>
      <PackingList item= {items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList = {handleClearList}/>
      <Stats items={items} />
    </div>

  );

}
