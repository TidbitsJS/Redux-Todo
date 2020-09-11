import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const TodoAdd = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ marginLeft: 10 }} onClick={handleShow}>
        Add <i class="fas fa-plus-square"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Let's do this</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ marginBottom: "1.2rem" }}>Log your todo </h5>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <i className="fab fa-galactic-senate"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="My Todo"
              aria-label="My Todo"
              aria-describedby="basic-addon1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </InputGroup>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="warning" onClick={handleClose}>
              close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodoAdd;
