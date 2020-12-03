import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTrue } from "../JS/actions/editAction";
import { DeletePerson, GetPerson } from "../JS/actions/PersonActions";

const Person = ({ person }) => {
  const dispatch = useDispatch();
  return (
    <div className="CardPerson">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        />
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>{person.email}</Card.Text>
          <Card.Text>{person.phone}</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              dispatch(GetPerson(person._id));
              dispatch(toggleTrue());
            }}
          >
            <Link to={`/edit/:${person._id}`}>Update</Link>
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(DeletePerson(person._id));
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Person;
