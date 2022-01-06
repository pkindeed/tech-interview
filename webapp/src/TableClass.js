import React from "react";
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios';

class TableClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            surname: '',
            birthDate: '',
            email: '',
            password: '',
            identity: '',
            passportNumber: '',
            dataIsSending: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        this.setState({ dataIsSending: true });
        event.preventDefault();
     
        await axios.post('http://localhost:9090/api/users', {  "name": this.state.name, "surname": this.state.surname, "birthDate": this.state.birthDate, "phone": this.state.phone, "email": this.state.email, "password": this.state.password,  "identity": this.state.identity, "passportNumber": this.state.passportNumber})
    
            .then(data => this.setState({ dataIsSending: false }));
    } catch(error) {
        console.log(error);
    };



    
    render() {
        const { dataIsSending } = this.state;
        if (dataIsSending === true) {
            return (
                <div>                
                    <br></br> <h2>Sending data...</h2>
                </div>);
        } else {
            return (
                <div>
                    <Paper>
                        <h1>Enter your data:</h1>
                        <form onSubmit={this.handleSubmit}>
                        <div className="spacing">
                            <TextField
                                required
                                label="Name"
                                name="name"
                                defaultValue=""
                                variant="outlined"
                                onChange={this.handleInputChange}
                            />
                            <br />
                           
                            <TextField
                                required
                                label="Surname"
                                name="surname"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />
                          
                            <TextField
                                required
                                type="date"                 
                                name="birthDate"
                                defaultValue="a"
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />
                            
                            <TextField
                                required
                             
                                label="Email:"
                                name="email"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                required
                                type="password"
                                label="Password:"
                                name="password"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />
                            
                          
                            <TextField
                                required
                                label="Phone"
                                name="phone"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />

                            <TextField
                                required
                                label="Identity:"
                                name="identity"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />

                            <TextField
                                required
                                label="Passport number"
                                name="passportNumber"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />
                            </div>
                            <Box m={2}><Button type="submit" variant="outlined">Submit</Button></Box>
                      </form>
                    </Paper>
                </div>
            );
        }
    }
}


export default TableClass;

