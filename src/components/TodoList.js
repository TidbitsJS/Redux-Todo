import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { data } from "./Data";

import { connect } from "react-redux";

const TodoList = (props) => {
  return (
    <div>
      <ListGroup className="todo-list">
        {props.todos.map((item, index) => (
          <ListGroup.Item key={index}>
            <div className="todo-item">
              <div
                className="todo-text"
                style={{
                  textDecoration: item.done ? "line-through" : undefined,
                }}
              >
                {item.text}
              </div>
              <div className="todo-action">
                <Button
                  variant="success"
                  onClick={() =>
                    props.dispatch({ type: "DONE", payload: { id: index } })
                  }
                >
                  <i className="fas fa-clipboard-check"></i>
                </Button>
                <Button
                  variant="danger"
                  onClick={() =>
                    props.dispatch({ type: "DELETE", payload: { id: index } })
                  }
                  className="delete"
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log({ state });
  return { todos: state };
};

export default connect(mapStateToProps)(TodoList);
