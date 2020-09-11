import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./todo.css";
import TodoList from "./TodoList";

class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        <Card style={{ width: "80vw" }} className="todo-card">
          <Card.Header>Daily Ikigai</Card.Header>
          <Card.Body>
            <TodoList />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
