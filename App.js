import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Additem from "./Additem";
import { useState } from 'react';
import SearchItem from "./SearchItem";
function App() {
  const [items,setItems]=useState(
    JSON.parse(localStorage.getItem('To-Do List'))
  );
  const [newItem,setNewItem]=useState('')
  
  const [search,setSearch]=useState('')
  const addItem=(item)=>{
    const id=items.length?items[items.length-1].id+1:1
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("To-Do List",JSON.stringify(listItems))

  }

  const handleCheck=(id)=>{
    const listItems=items.map((it)=>it.id===id?{...it,checked:!it.checked}:it)
    setItems(listItems)
    localStorage.setItem("To-Do List",JSON.stringify(listItems))
  }

  const handleDelete=(id)=>  {
    const ListItems=items.filter((it)=>it.id!==id)
    setItems(ListItems)
    localStorage.setItem("To-Do List",JSON.stringify(ListItems))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!newItem){
      return
    }
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
    
  }
  return (
    <div className="App">
    <Header 
      length={items.length}
    />

    <Additem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
    <SearchItem
    search={search}
    setSearch={setSearch}
    />
    <Content 
      items={items.filter(item=>((item.item).toLowerCase().includes(search.toLowerCase())))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />

    <Footer
      length={items.length}
    />

   </div>
  
  );
}

export default App;
