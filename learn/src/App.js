import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {AddTodo} from "./MyComponents/AddTodo";
import {Todos} from "./MyComponents/Todos";
//import {TodoItem} from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";
import React,{useState} from 'react';

function App() {

  let addTodo;
  const onDelete=(todo)=>{
    console.log("I amonDelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

  }

  const addtodo=(title, desc)=>{

    console.log("I am adding this todo",title, desc);
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

  }
const [todos, setTodos]=useState([
  {
    sno: 1,
    title: "Go to the Market",
    desc: "You need to go Market to get this jobs done1"
  },

  {
    sno: 2,
    title: "Go to the School",
    desc: "You need to go Market to get this jobs done2"
  },

  {
    sno: 3,
    title: "Go to the Mall",
    desc: "You need to go Market to get this jobs done3"
  },


]);

  return (
    
    <>
    <Header title= "My Todo's List" searchBar={true} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;


