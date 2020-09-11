import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { data } from "./Data";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ListGroup className="todo-list">
          {data.map((item, index) => (
            <ListGroup.Item key={index}>
              <div className="todo-item">
                <div className="todo-text">{item.text}</div>
                <div className="todo-action">
                  <Button variant="success">
                    <i className="fas fa-clipboard-check"></i>
                  </Button>
                  <Button variant="danger" className="delete">
                    <i className="fas fa-trash"></i>
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default TodoList;
