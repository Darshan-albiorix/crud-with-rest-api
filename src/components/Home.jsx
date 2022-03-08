import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deletePassengers, getStringifyData, loadPassengers } from "../redux/actions/actions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import querySting from "query-string";

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
  const [page, setPage] = useState(1);
  const users = useSelector((state) => state.passengers);


  const parsed = { page: page, size: 10 };
  const stringified = querySting.stringify(parsed);

  const pageHandler = (e) => {
    setPage(e.target.textContent);
  };

  const getNavigate = () => {
    navigate("/adduser");
  };

  const deleteUser = (id) => {
    dispatch(deletePassengers(id));
  };

  const updateUser = (id) => {
    navigate(`/updateuser/${id}`);
  };

  useEffect(()=>{
    dispatch(getStringifyData(stringified))
  }, [parsed.page, dispatch])

  useEffect(() => {
    dispatch(loadPassengers());
  }, []);

  const totalPage = Math.floor(users.passengers.length / 10);


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
            {users.passengerData.map((user) => (
              <StyledTableRow key={user._id}>
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
                <StyledTableCell>
                  <ButtonGroup
                    sx={{
                      alignItems: "center",
                    }}
                    variant="contained"
                    aria-label="outlined button group"
                  >
                    <Button onClick={() => deleteUser(user._id)}>Delete</Button>
                    <Button onClick={() => updateUser(user._id)}>update</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          color="primary"
          onClick={(e) => pageHandler(e)}
        />
      </Stack>
    </div>
  );
}

export default Home;
