import React, { useState } from 'react';
import Styled from '../../Pages/my-account/MyAccount.module.scss';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '../UI/Button';
function ContactInfo(props) {
  const [contactField, setcontactField] = useState({
    email: "marcelaperez@gmail.com",
    telephone: " +569 5555 5555",
    address: "Las Condes 1244, Región Metropolitana, Chile",
  })
  const getContactField = (event) => {
    if (event.target.id === "Email"){
      setcontactField((field)=>{
        return {
          ...field,
          email:event.target.value
      }
    })
  }
  else if(event.target.id === "Teléfono"){
    setcontactField((field)=>{
      return {
        ...field,
        telephone:event.target.value
    }
  })
}
  else if(event.target.id === "Dirección"){
    setcontactField((field)=>{
      return {
        ...field,
        address:event.target.value
    }
  })
}
}
  const saveContactData = () => {
    props.setContactData((prevState => !prevState))
  }
  return <div>
    {props.contactData ?
      <>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Email</Typography>
          <Typography className='light-blue'> {contactField.email} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Teléfono</Typography>
          <Typography className='light-blue'>{contactField.telephone}  </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Dirección</Typography>
          <Typography className='light-blue'> {contactField.address}  </Typography>
        </div>
      </>
      :
      <>
        <div className={Styled.fields}>
          <TextField
            fullWidth
            id="Email"
            label="Email"
            variant="standard"
            type="text"
            onChange={getContactField}
            name={contactField.email}
          />
        </div>

        <div className={Styled.fields}>
          <TextField
            fullWidth
            id="Teléfono"
            label="Teléfono"
            variant="standard"
            type="text"
            onChange={getContactField}
            name={contactField.telephone}
          />
          <div className={Styled.fields}>
            <TextField
              fullWidth
              id="Dirección"
              label="Dirección"
              variant="standard"
              type="text"
              onChange={getContactField}
              name={contactField.address}
            />
          </div>

        </div>
        <div className='action-btn'>
          <div className={Styled.fields}>
            <Button type="button" className="button-primary " onClick={saveContactData}>Guardar</Button>
          </div>
          <div className={Styled.fields}>
            <Button type="button" className="button-secondary-outline " >Descartar</Button>
          </div>
        </div>
      </>
    }
  </div>;
}

export default ContactInfo;
