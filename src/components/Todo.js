import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./todo.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        <Card style={{ width: "80vw" }} className="todo-card">
          <Card.Header
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3>Daily Ikigai</h3>
            <TodoAdd />
          </Card.Header>
          <Card.Body>
            <TodoList />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
