import AppName from './components/AppName';
import AddTodo from './components/Addtodo';
import TodoItems from './components/TodoItems';
import './appp.css';
import { useState } from 'react';
import WelcomeMessagee from './components/welcomMessage';


function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {


    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate },];
    setTodoItems(newTodoItems);
  };


  const handleDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

  };
  return <center className='todo-container container'>
    <AppName />
    <AddTodo onNewItem={handleNewItem} />
    {todoItems.length === 0 && <WelcomeMessagee />}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} />

  </center>

};

export default App
