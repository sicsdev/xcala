import React from 'react';
import Styled from '../../Pages/my-account/MyAccount.module.scss';
import { TextField } from '@mui/material';
import Customselect from '../UI/select';
import Button from '../UI/Button';
function DataPersonal() {
  return <div>
    <div className={Styled.fields}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Alias"
        variant="standard"
        type="text"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="Estado Civil"
        Labelid="Estado Civil"
        placholder="Estado Civil"
        Selectid="Estado Civil"
        menuItems="Chilena"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="Nacionalidad"
        Labelid="Nacionalidad"
        placholder="Nacionalidad"
        Selectid="Nacionalidad"
        menuItems="Casada"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="País de residencia"
        Labelid="País de residencia"
        placholder="País de residencia"
        Selectid="País de residencia"
        menuItems="Chilena"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="Profesión"
        Labelid="Profesión"
        placholder="Profesión"
        Selectid="Profesión"
        menuItems="Consultora"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="Situación Laboral"
        Labelid="Situación Laboral"
        placholder="Situación Laboral"
        Selectid="Situación Laboral"
        menuItems="Contratada"
      />
    </div>
    <div className={Styled.fields}>
      <TextField
        fullWidth
        id="Ingresos-mensuales"
        label="Ingresos mensuales"
        variant="standard"
        type="text"
      />
    </div>
    <div className={Styled.fields}>
      <Customselect
        label="Ingresos mensuales"
        Labelid="Ingresos mensuales"
        placholder="Ingresos mensuales"
        Selectid="Ingresos mensuales"
        menuItems="$ 2.750.000"
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

export default DataPersonal;
