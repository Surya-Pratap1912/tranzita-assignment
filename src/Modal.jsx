import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import Button from '@mui/material/Button';

export const Modal = ({ set, container, setContainer,changeSet,shape,indid }) => {
  const [form, setForm] = useState({
    title: '',
    userId: '', // Changed from 'userid' to 'userId' to match the input's name attribute
    id: '',
    completed: '',
  });

  if (!set) return null;

  const buttonstyles = {
    marginTop: '43px',
    marginLeft: '120px',
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let temp=container;
    if(shape==='add'){
   temp=[form,...temp];
   setContainer([...temp]);}
   else{
     temp.forEach((item,index)=>{
        if(item.id===indid){
          temp[index]=form;
          temp[index].id=indid;
        }
     })
     setForm({})
     setContainer([...temp])
   }
   changeSet(false);
  };

  return ReactDOM.createPortal(
    <>
      <div id="modal" >
        <div className="modal-content">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="userId">User ID:</label>
          <br />
          <input
            type="text"
            id="userId"
            name="userId"
            value={form.userId}
            onChange={handleInputChange}
          />
          <br />
          {shape==='add'?<><label htmlFor="id">ID:</label>
          <br />
         <input
            type="text"
            id="id"
            name="id"
            value={form.id}
            onChange={handleInputChange}
          /></>:<></>}
          <br />
          <label htmlFor="completed">Completed</label>
          <select
            id="completed"
            name="completed"
            value={form.completed}
            onChange={handleInputChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <br />
          <Button variant="contained" style={buttonstyles} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};
