import React from "react";
import {Button} from "react-bootstrap";
import { FaPen } from "react-icons/fa";

function Todo({todo, index, markTodo, removeTodo, updateTodo}){
   console.log('todo: ', todo)
    return (
      <div className="todo">
        <span style={{textDecoration: todo.isDone ? "line-through" : ""}}>
            {todo.text}
        </span>
        <div>
            <Button variant="outline-info" onClick={()=>updateTodo(index)}><FaPen/></Button>
            <Button variant="outline-success" onClick={()=>markTodo(index)}>✓</Button>
            <Button variant="outline-danger" onClick={()=> removeTodo(index)}>✕</Button>
        </div>
      </div>
    );

}

export default Todo;