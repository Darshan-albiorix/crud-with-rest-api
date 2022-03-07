import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./form.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAirline,
  getSingleUser,
  updateUser,
} from "../redux/actions/actions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function UpdateUser() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { id } = useParams();
  let user = useSelector((state)=>state.passengers);
  const [state, setState] = useState({
    name: "",
    trips: "",
    airline: `${user.user.airline}`,
  });

  console.log('user', user)
  let { airline } = useSelector((state) => state.passengers);
  console.log('airline', airline)

  useEffect(() => {
    dispatch(fetchAirline())
    dispatch(getSingleUser(id));
  }, []);

  useEffect(()=>{
    if(user.user){
      setState({...user.user})
    }
  }, [user])
  console.log("airline", airline);
   
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(updateUser(state, id));
    navigate("/");
    setState({});
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>EDIT PASSENGER</h2>
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          type="text"
          value={state.name || ''}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id="standard-basic"
          label="Trips"
          name="trips"
          variant="standard"
          type="number"
          value={state.trips || ''}
          onChange={handleInputChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Airline</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.airline || ''}
            label="Airline"
            onChange={handleInputChange}
          >
            {airline.map((item, index) => {
              return (
                <MenuItem value={item.id} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: "15px",
            width: "100%",
          }}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default UpdateUser;
