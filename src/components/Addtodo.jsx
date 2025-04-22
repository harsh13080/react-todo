import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";



function AddTodo({onNewItem}) {

  const[todoName, setTodoName] =useState('');
  const[dueDate, setDueDate] =useState('');

  const handleNameChange = (event) =>{
    setTodoName(event.target.value);

  }
  const handleDateChange = (event) =>{

    setDueDate(event.target.value);
  }


  const handleNewButtonClicked =() =>{
 onNewItem(todoName,dueDate);
setDueDate('');
setTodoName('');

  }

  return <div className='container text-center'>
    <div class='row kg-row'>
      <div class='col-6'>
        <input type="text" placeholder="Enter Todo Here"
        value={todoName}
         onChange={handleNameChange} />
      </div>
      <div class='col-4'>
        <input type="date"
        value={dueDate}
         onChange={handleDateChange} />
      </div>
      <div class='col-2'>
        <button type="button" class='btn btn-success kg-button' onClick={handleNewButtonClicked}><IoAddCircle /></button>
      </div>
    </div>
  </div>

}
export default AddTodo;