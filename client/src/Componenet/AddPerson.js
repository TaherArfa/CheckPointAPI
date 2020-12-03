import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { personReducer } from "../JS/reducers/persons";
import { postPerson, editPerson } from "../JS/actions/PersonActions";

const AddPerson = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ name: "", email: "", phone: "", age: "" });
  const userReducer = useSelector((state) => state.personReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);

  useEffect(() => {
    edit
      ? setUser(userReducer)
      : setUser({ name: "", email: "", phone: "", age: "" });
  }, [edit, userReducer]);

  // const handlePerson = () => (edit ? null : dispatch(postPerson(user)));
  const handlePerson = (e) => {
    if (!edit) {
      dispatch(postPerson(user));
    } else {
      dispatch(editPerson(userReducer._id, user));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="divForm">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            value={user.name}
            type="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            value={user.email}
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            value={user.phone}
            type="number"
            name="phone"
            placeholder="+216 20 000 000 "
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            value={user.age}
            type="number"
            name="age"
            placeholder="age "
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit" onClick={handlePerson}>
            {edit ? "Edit" : "save"}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddPerson;
