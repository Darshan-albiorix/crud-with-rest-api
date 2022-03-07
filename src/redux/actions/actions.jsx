import axios from "axios";

const baseUrl = process.env.REACT_APP_URL;

const getPassengers = (passengers) => {
  return {
    type: "GET_PASSENGERS",
    payload: passengers,
  };
};

const deletedPassengers = () => {
  return {
    type: "DELETE_PASSANGER",
  };
};

const addedPassenger = () => {
  return {
    type: "ADD_PASSENGER",
  };
};

const getAirline = (airlineData) => {
  return {
    type: "GET_AIRLINE",
    payload: airlineData,
  };
}; 

const getUser = (user) =>{
  return{
    type:"GET_SINGLE_USER",
    payload:user
  }
}

const userUpdated = () => {
  return {
    type: "UPDATE_USER",
  };
};

export const loadPassengers = () => {
  return function (dispatch) {
    axios
      .get(`${baseUrl}/passenger`)
      .then((resp) => {
        dispatch(getPassengers(resp.data.data.splice(0,10)));
      })
      .catch((error) => console.log(error));
  };
};

export const deletePassengers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${baseUrl}/passenger/${id}`)
      .then((resp) => {
        dispatch(deletedPassengers());
        dispatch(loadPassengers());
      })
      .catch((error) => console.log(error));
  };
};

export const addPassengers = (user) => {
  return function (dispatch) {
    axios
      .post(`${baseUrl}/passenger`, user)
      .then((resp) => {
        dispatch(addedPassenger());
      })
      .catch((error) => console.log(error));
  };
};

export const fetchAirline = () => {
  return (dispatch) => {
    axios
    .get(`${baseUrl}/airlines`)
    .then((resp) => {
      console.log(resp.data)
        dispatch(getAirline(resp.data));
      })
      .catch((err) => console.error(err));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${baseUrl}/passenger/${id}`)
      .then((resp) => {
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${baseUrl}/passenger/${id}`, user)
      .then((resp) => {
        console.log('updateUser', user)
        dispatch(userUpdated());
      })
      .catch((error) => console.log(error));
  };
};