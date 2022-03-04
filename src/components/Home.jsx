import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadPassengers } from "../redux/actions/actions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const users = useSelector((state) => state.passengers);
  console.log(users.passengers);

  const getNavigate = () => {
    navigate("/adduser");
  };

  useEffect(() => {
    dispatch(loadPassengers());
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CRUD WITH REST API</h1>
      <Button
        variant="contained"
        onClick={getNavigate}
        sx={{
          marginLeft: "42%",
          marginBottom: "15px",
        }}
      >
        Add New Passenger
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Trips</StyledTableCell>
              <StyledTableCell align="left">ID(airline)</StyledTableCell>
              <StyledTableCell align="left">Name(airline)</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.passengers.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="left">{user.trips}</StyledTableCell>
                <StyledTableCell align="left">
                  {user.airline[0].id}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {user.airline[0].name}
                </StyledTableCell>
                {/* <StyledTableCell align="right"></StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
