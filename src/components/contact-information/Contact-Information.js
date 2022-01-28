import React from 'react';
import Styled from '../../Pages/my-account/MyAccount.module.scss';
import { TextField } from '@mui/material';
import Customselect from '../UI/select';
import Button from '../UI/Button';
function ContactInfo() {
  return <div>
    <div className={Styled.fields}>
      <TextField
        fullWidth
        id="Email"
        label="Email"
        variant="standard"
        type="text"
      />
    </div>
   
    <div className={Styled.fields}>
      <TextField
        fullWidth
        id="Teléfono"
        label="Teléfono"
        variant="standard"
        type="text"
      />
    <div className={Styled.fields}>
      <TextField
        fullWidth
        id="Dirección"
        label="Dirección"
        variant="standard"
        type="text"
      />
    </div>
   
    </div>
    <div className={Styled.fields}>
      <Button type="button" className="button-primary " >Guardar</Button>
    </div>
    <div className={Styled.fields}>
      <Button type="button" className="button-secondary-outline " >Descartar</Button>
    </div>
  </div>;
}

export default ContactInfo;
