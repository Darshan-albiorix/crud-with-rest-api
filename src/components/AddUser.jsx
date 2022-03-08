import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./form.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPassengers } from "../redux/actions/actions";

function AddUser() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    trips: "",
    airline: "",
  });

 

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPassengers(state));
    navigate("/");
    setState({})
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>ADD PASSENGER</h2>
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Name"
          name = 'name'
          variant="standard"
          type="text"
          value={state.name}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Trips"
          name = 'trips'
          variant="standard"
          type="number"
          value={state.trips}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Airline"
          name = 'airline'
          variant="standard"
          type="number"
          value={state.airline}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: "15px",
            width: "100%",
          }}
        >
          submit
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
