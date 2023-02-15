import React from "react";
import "./App.css";
import {Button, Card, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import { text } from "@fortawesome/fontawesome-svg-core";

function App() {
   const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
   ]);

   const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
   };

   const markTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
   };

   const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
   };

   const updateTodo = index => {
      const newTodos = [...todos];
      const item = newTodos[index];
      console.log('textttt: ', text,'---', index)
      let newItem = prompt(`Update ${item.text}?`, item.text);
      let todoObj = { text: newItem, isDone: false };
      newTodos.splice(index, 1, todoObj);

      setTodos(newTodos);
   };

   return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {
            todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo 
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                  />
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
   );
}
export default App;