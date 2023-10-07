import React, { useState,useEffect } from 'react';
import TodoCard from './TodoCard';
import axios from 'axios';
import { Modal } from './Modal';
import Button from '@mui/material/Button';
import './App.css'
const App = () => {
  const [state,setState]=useState('');
  const[open,setOpen]=useState(false);
  const [todos, setTodos] = useState([]);
  const [id,setId]=useState()
  useEffect(()=>{
    let fetchData=async()=>{
      let req=await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos([...req.data]);
      console.log(req);
    }
    fetchData();
  },[])

  const handleAdd=()=>{
    setOpen(true);
    setState('add')
  }

  const handleUpdate = (todoId) => {
   setOpen(true);
   setState('update')
   setId(todoId);
  };

  const handleDelete = (todoId) => {
    let filterData=todos.filter((item)=>{
      return item.id!==todoId;
    })
    setTodos([...filterData])
  };

  return (
    <>
    <Button variant="text" onClick={handleAdd}>ADD</Button>
    <div className="app">
    {todos.map((todo)=>{
      return <TodoCard
      key={todo.id}
      todo={todo}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
    })}
       <Modal setclose={()=>{
        setOpen(false);
       
      }}
      set={open}
      setContainer={setTodos}
      container={todos}
      changeSet={setOpen}
      shape={state}
      indid={id}/>
    </div>
    </>
  );
};

export default App;
