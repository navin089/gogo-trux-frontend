import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import "./User.css";

const columns = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
    { id: 'gender', label: 'Gender', minWidth: 100, align: 'center' },
    {
      id: 'date_of_birth',
      label: 'Date Of Birth',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'email',
      label: 'Email Id',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toString(),
    },
    {
      id: 'mobile',
      label: 'Mobile No',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toString(),
    },
    {
        id: 'street',
        label: 'Street',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toString(),
      },
    {
        id: 'city',
        label: 'City',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toString(),
      },
      {
        id: 'state',
        label: 'State',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toString(),
      },
      {
        id: 'action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toString(),
      },
  ];
  
  function createData(name, gender, date_of_birth, email, mobile, street, city, state, action, status) {
    return { name, gender, date_of_birth, email, mobile, street, city, state, action, status };
  }
  
  const rows = [
    createData('Navin Kodam', 'M', '18-NOV-1999', "navinkodam@gmail.com", '1223287263', "Area 3", "Solapur", "Maharashtra", "Nan", "Completed" ),
    createData('Vasant Basutkar', 'M', '23-OCT-2000', "vasantbasutkar@gmail.com", '1223287263', "Area 1", "Solapur", "Maharashtra", "Nan", "Busy"),
    createData('Ravikiran Kota', 'M', '31-DEC-1998', "ravikirankota@gmail.com", '1223287263', "Area 5", "Solapur", "Maharashtra", "Nan", "Waiting"),
    createData('Sagar Kondle', 'M', '18-APR-2000', "sagarkondle@gmail.com", '1223287263', "Area 7", "Solapur", "Maharashtra", "Nan", "Cancelled"),
    createData('John Doe', 'M', '23-JULY-1998', "johndoe@gmail.com", '1223287263', "Area 2", "Solapur", "Maharashtra", "Nan", "Completed"),
    createData('Stimit Shah', 'M', '1-JAN-2001', "stimitshah@gmail.com", '1223287263', "Area 11", "Solapur", "Maharashtra", "Nan", "Busy"),
  ];


function User() {
  const statusList = ["All", "Waiting", "Busy", "Completed", "Cancelled"];
  const [status, setStatus] = useState(statusList[0]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="user">
      <div className="user__header">
        <h1>Users</h1>
      </div>
      <div className="user__headerInput">
        {/* <p>Search :</p> */}
        <form>
          <TextField
            className="user__headerInputSearch"
            label="Search here"
            variant="outlined"
            size="small"
          />
          <FormControl variant="outlined">
            <Select
              className="user__headerInputSelect"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ color: "black" }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value={"Waiting"}>Waiting</MenuItem>
              <MenuItem value={"Busy"}>Busy</MenuItem>
              <MenuItem value={"Completed"}>Completed</MenuItem>
              <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
            </Select>
          </FormControl>

          <Button className="user__searchReset" variant="outlined">
            SEARCH
          </Button>
          <Button className="user__searchReset" variant="outlined">
            RESET
          </Button>
        </form>
        <Button className="user__addUser" variant="outlined" size="small">
          ADD USER
        </Button>
      </div>
      <Button className="user__exportButton" variant="outlined">
        EXPORT DATA
      </Button>

      <div className="user__data">
        <Paper className="user__dataPage">
          <TableContainer className="user__dataTableContainer">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default User;
