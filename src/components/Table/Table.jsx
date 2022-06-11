import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { yellow } from '@mui/material/colors';
import "./Table.scss";

function createData(product, orderId, date, status) {
  return { product, orderId, date, status};
}

const rows = [
  createData('Playstation 5', 356891,"9th June 2022", "Approved"),
  createData('Macbook Air M2', 356890, "9th June 2022", "Pending"),
  createData('Samsung 2TB SSD UIW345',356889, "9th June 2022", "Delivered"),
  createData('LG Monitor', 356888, "9th June 2022", "Approved"),
  createData('Motorola E5 Plus', 356887, "9th June 2022", "Approved"),
];

export default function BasicTable() {
  
  const makeStyles = (status)=>{
    if (status == "Approved"){
     return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
        padding: "0.2rem 0.3rem",
        borderRadius: "5px",
      }
    }
    else if (status == "Pending"){
      return{
        background: "#ffadad8f",
        color: "red",
        padding: "0.2rem 0.3rem",
        borderRadius: "5px",
      }
    }
    else{
      return{
        background: "#00b7ffbe",
        color: "white",
        padding: "0.2rem 0.3rem",
        borderRadius: "5px",
      }
    }
  }
  return (
    <div className="table">
        <h3>Recent Orders</h3>
        <TableContainer component={Paper}
            style={{boxShadow: "0px 13px 20px 0px #80808029", borderRadius: "1rem"}}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="left">Order Id</TableCell>
                    <TableCell align="left">Date&nbsp;</TableCell>
                    <TableCell align="left">Status&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                      key={row.product}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                      <TableCell component="th" scope="row">
                          {row.product}
                      </TableCell>
                      <TableCell align="left">{row.orderId}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">
                        <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                      </TableCell>
                      <TableCell align="left" className='details'>details</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}
