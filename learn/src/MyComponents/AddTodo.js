import React, { useState } from 'react';
import react from 'react';

export const AddTodo = (addTodo) => {

const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const submit=(e)=>{
e.preventDefault();
if(!title || desc)
{
  alert("Title and Description can not be a blacck");

}
addTodo(title,desc);
}
    return (
        <div className="container my-3" >
        <h3>
            Add Todo 
        </h3>
           <form onSubmit={submit}>
  <div className="form-group my-3"  >
    <label for="title">Todo Title</label>
    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Todo Title"/>
    </div>
  <div className="form-group">
    <label For="desc">Todo Description</label>
    <input type="desc" className="form-control" id="desc" value={desc} onChange= {(e)=>setDesc(e.target.value)} placeholder="Enter Todo Description"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
</form>
        </div>
    )
}
