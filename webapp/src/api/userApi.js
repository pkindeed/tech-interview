import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '../App.css';
import axios from 'axios';
import BasicModal from "../PopUp";

class userApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      dataIsSending: false,
      dataReceived: false,
      id: 'yes',
      name: 'yes',
      surname: 'yes',
      birtDate: 'yes',
      email: 'yes',
      phone: 'yes',
      identity: 'yes',
      passport: 'yes',
      password:''
    };
   
  }


  async componentDidMount() {
    try {
      await fetch('http://localhost:9090/api/users')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { data } = this.state;
    const { dataIsSending } = this.state;

    if (data != null && dataIsSending === false) {
      return (
        <div>
          <h2>Table of data:</h2>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Id.</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Surname</TableCell>
                  <TableCell align="right">Birth date.</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Identity.</TableCell>
                  <TableCell align="right">Passport</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => (
                  <TableRow key={row.name}>
                   
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.surname}</TableCell>
                    <TableCell align="right">{row.birthDate}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.identity}</TableCell>
                    <TableCell align="right">{row.passportNumber}</TableCell>
                    <BasicModal 
                    id={row.id}
                    name={row.name}
                    surname={row.surname}
                    birthDate={row.birthDate}
                    email={row.email}
                    phone={row.phone}
                    identity={row.identity}
                    passport={row.passportNumber}
                    password={row.password}
          
                    
                    
                    ></BasicModal>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
       
          </Paper>
        </div>
      );
    } else {
      return (
        <div>
         
          <br></br> <h2>Loading...</h2>
      </div>);
    }
  }
}


export default userApi;