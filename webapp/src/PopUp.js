import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class BasicModal extends React.Component {
  constructor(props) {
  super(props);
  this.state = {  
  id: this.props.id,
  name: this.props.name,
  surname: this.props.surname,
  birthDate: this.props.birthDate,
  email: this.props.email,
  password: this.props.password,
  identity: this.props.identity,
  passportNumber: this.props.passport,
  phone: this.props.phone,
  open: false
};
  this.handleOpen = this.handleOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  }
 
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}

handleOpen(){
  this.setState({
    open: true
  });
}



async handleClose(event) {
  event.preventDefault();   
  await axios.post('http://localhost:9090/api/users', { "id": this.state.id, "name": this.state.name, "surname": this.state.surname, "birthDate": this.state.birthDate, "phone": this.state.phone, "email": this.state.email, "password": this.state.password,  "identity": this.state.identity, "passportNumber": this.state.passportNumber})
  .then(data => this.setState({ open: false }))
  .then(window.location.reload(false));
}
 

async handleDelete(event) {
  event.preventDefault(); 
  await axios.delete('http://localhost:9090/api/users', { data: {"id": this.state.id, "name": this.state.name, "surname": this.state.surname, "birthDate": this.state.birthDate, "phone": this.state.phone, "email": this.state.email, "password": this.state.password,  "identity": this.state.identity, "passportNumber": this.state.passportNumber}})
  .then(data => this.setState({ open: false }))
  .then(window.location.reload(false));
}


render(){

  return (
    <div>

      <Button onClick={this.handleOpen}>Update</Button>
     
 <Modal
        open={this.state.open}
        onClose={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Update the User
          

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue=  { this.props.id }
          name="id"                      
          onChange={this.handleInputChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.name}
          name="name"
                        
          onChange={this.handleInputChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.password}
          name="password"
                        
          onChange={this.handleInputChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue= {this.props.surname}
          name="surname"
                        
          onChange={this.handleInputChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.birthDate}
          name="birthDate"
                        
          onChange={this.handleInputChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.email}
          name="email"
                        
          onChange={this.handleInputChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.phone}
          name="phone"
                        
          onChange={this.handleInputChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.identity}
          name="identity"
                        
          onChange={this.handleInputChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={this.props.passport}
          name="passportNumber"
                        
          onChange={this.handleInputChange}
        />

<Button onClick={this.handleClose}>Update</Button>
<Button onClick={this.handleDelete}>Delete</Button>
        
          </Typography>
        </Box>
      </Modal>


    
    </div>
  );
}
}


export default BasicModal;