import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {AddTodo} from "./MyComponents/AddTodo";
import {Todos} from "./MyComponents/Todos";
//import {TodoItem} from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";
import React,{useState} from 'react';

function App() {

  let initTodo;
  if(localStorage.getItem("todos")){
initTodo=[];
  }

  else{

    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
localStorage.getItem("todos");
  }

  const addTodoItem=(title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length==0){
      sno=1;
    }
    else
    {
      sno=todos[todos.length-1].sno+1
    }
    const myTodo={
      sno: sno,
      title: title,
      desc: desc,
    }
setTodos([...todos, myTodo])
console.log(myTodo)
  localStorage.setItem("todos", JSON.stringify(todos))

  }
const [todos, setTodos]=useState([
 

]);

  return (
    
    <>
    <Header title= "My Todo's List" searchBar={true} />
    <AddTodo addTodo={addTodoItem}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;


