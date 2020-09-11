import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ListGroup className="todo-list">
          <ListGroup.Item>
            <div className="todo-item">
              <div className="todo-text">Do something</div>
              <div className="todo-action">
                <Button variant="success">
                  <i class="fas fa-clipboard-check"></i>
                </Button>
                <Button variant="danger" className="delete">
                  <i class="fas fa-trash"></i>
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default TodoList;
