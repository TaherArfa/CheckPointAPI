import "./App.css";
import { Link, Route } from "react-router-dom";
import Personlist from "../src/Componenet/Personlist";
import AddPerson from "./Componenet/AddPerson";
import { Button } from "react-bootstrap";
import { toggleFalse } from "./JS/actions/editAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <h1>MERN APPLICATION</h1>
      <Button variant="link" onClick={dispatch(toggleFalse())}>
        <Link to="/add">Add New Person</Link>
      </Button>
      <Button variant="link">
        <Link to="/">List OF Person</Link>
      </Button>
      <switch>
        <Route exact path="/" component={Personlist} />
        <Route path={["/add", "/edit/:id"]} component={AddPerson} />
      </switch>
      {/* </header> */}
    </div>
  );
}

export default App;
