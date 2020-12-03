import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPerson } from "../JS/actions/PersonActions";
import Person from "./Person";
import { Spinner } from "react-bootstrap";

const Personlist = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.personReducer.persons);
  const loading = useSelector((state) => state.personReducer.loading);
  // console.log("hhhh", persons, loading);

  useEffect(() => {
    dispatch(GetAllPerson());
  }, []);
  return (
    <div className="allCardPerson">
      {loading ? (
        <div className="SpinnerLoading">
          <Spinner animation="border" />
          <p> loading</p>
        </div>
      ) : (
        persons.map((el) => <Person key={el._id} person={el} />)
      )}
    </div>
  );
};

export default Personlist;
