import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './todocard.css'
import Button from '@mui/material/Button';
const TodoCard = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="todo-card">
      <h3>{todo.title}</h3>
      <p>User ID: {todo.userId}</p>
      <p>ID: {todo.id}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <div className="icons">
      <Button variant="text"  onClick={() => onUpdate(todo.id)}  >Update</Button>
      <Button variant="text"  onClick={() => onDelete(todo.id)}   >Delete</Button>
       
      </div>
    </div>
  );
};

export default TodoCard;
