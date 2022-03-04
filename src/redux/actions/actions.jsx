import axios from "axios";

const baseUrl = process.env.REACT_APP_URL;

const getPassengers = (passengers) => {
  return {
    type: "GET_PASSENGERS",
    payload: passengers,
  };
};

const addedPassengers = (passengers) => {
  return {
    type: "ADD_PASSENGERS",
    payload: passengers,
  };
};

export const loadPassengers = () => {
  return  function (dispatch) {
       axios.get(`${baseUrl}/passenger`).then((resp)=>{
           console.log('response', resp)
           dispatch(getPassengers(resp.data.data))
       }).catch((error)=>console.log(error))
  };
};

export const addPassengers = () => {
  return  function (dispatch) {
       axios.post(`${baseUrl}/passenger/:id`).then((resp)=>{
           console.log('response', resp)
           dispatch(addedPassengers(resp.data.data))
       }).catch((error)=>console.log(error))
  };
};