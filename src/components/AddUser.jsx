import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./form.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function AddUser() {

  const[state, setState] = useState({
    name:'',
    trips:'',
    airlines:''
  })

  const[error, setError] = useState('');
   
  const {name, trips, airlines} = state;
  let navigate = useNavigate();
  const getBack = () => {
    navigate("/");
  };

  const handleInputChange = (e) =>{
    let {name, value} = e.target;
    setState({...state,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!name || !trips || !airlines){
      setError('please Fill all details')
    }
  }

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
          variant="standard"
          type='text'
          value={name}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Trips"
          variant="standard"
          type='number'
          value={trips}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Airline"
          variant="standard"
          type='number'
          value={airlines}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          onClick={getBack}
          sx={{
            marginTop: "15px",
            width: "100%",
          }}
        >
          Back
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
