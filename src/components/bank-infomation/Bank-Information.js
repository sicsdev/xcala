import React from 'react';
import Styled from '../../Pages/my-account/MyAccount.module.scss';
import { TextField } from '@mui/material';
import Customselect from '../UI/select';
import Button from '../UI/Button';
function BankInfo() {
  return <div>
    <div className={Styled.fields}>
      <Customselect
        label="Banco"
        Labelid="Banco"
        placholder="Banco"
        Selectid="Banco"
        menuItems="Banco de Chile"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="Tipo de cuenta"
        Labelid="Tipo de cuenta"
        placholder="Tipo de cuenta"
        Selectid="Tipo de cuenta"
        menuItems="Cuenta Corriente"
      />
    </div>
    <div className={Styled.fields}>
      <TextField
        fullWidth
        id="cuenta"
        label="No. de cuenta"
        variant="standard"
        type="text"
      />
    </div>
    <div className={Styled.fields}>
      <Button type="button" className="button-primary " >Guardar</Button>
    </div>
    <div className={Styled.fields}>
      <Button type="button" className="button-secondary-outline " >Descartar</Button>
    </div>
  </div>;
}

export default BankInfo;
