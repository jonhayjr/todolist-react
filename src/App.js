import { useState } from 'react';

 /* Import components*/
 import Header from './components/Header/Header';
 import Form from './components/Form/Form';
 import TodoListItem from './components/TodoListItem/TodoListItem';
 import TodoListContainer from './components/TodoListContainer/TodoListContainer';
 import Footer from './components/Footer/Footer'

const App = () => {
  const [todoList, setTodoList] = useState([]);

  //Function to handle change to completed checkbox
  const toggleCompleted = (index, completed) => {
    setTodoList(prev => {
      let todos = [...prev];
      todos[index].completed = completed;

      return todos;
    })



  }

  //Function to handle deleting todo
  const deleteTodoItem = (index) => {
    setTodoList(prev => {
      let todos = prev.filter((item, i) => {
       return i !== index
      })

      return todos;
    })

  }

  //Function that add new todos
  const addTodoItem = (item) => {
    setTodoList(prev => {
      let todos = [...prev];
      todos.push(item);

      return todos;
    })

  }

  //function that handles updates todo item text
  const updateTodoText = (index, item) => {
    setTodoList(prev => {
      let todos = [...prev];
      todos[index].item = item;

      return todos;
    })
  } 


  return (
    <div>
      <Header/>
      <Form addTodoItem={addTodoItem}/>
      {todoList.length > 0
      ? (<TodoListContainer>
        {
          todoList.map((item, index) => (
            <TodoListItem key={index} item={item} toggleCompleted={toggleCompleted} index={index} deleteTodoItem={deleteTodoItem} updateTodoText={updateTodoText}/>
          ))
        }
      </TodoListContainer>)
      : <p className="text-center mt-5 text-xl">You currently have no todo items.</p>
      }
      <Footer/>
    </div>
  );
}

export default App;
