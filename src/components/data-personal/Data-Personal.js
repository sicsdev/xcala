import React, { useState } from 'react';
import Styled from '../../Pages/my-account/MyAccount.module.scss';
import { TextField } from '@mui/material';
import Customselect from '../UI/select';
import Typography from '@mui/material/Typography';
import Button from '../UI/Button';
function DataPersonal(props) {
  const [personalFields, setPersonalField] = useState({
    alias: 'Marcelita',
    estado_civil: 'Casada',
    Nacionalidad: 'Chilena',
    País_der_esidencia: 'Chile',
    Profesión: 'Consultora',
    Situación_laboral: 'Contratada',
    Ingresos_mensuales: '$ 2.750.000',
    Origen_de_fondos: 'Salario',
  })

  const getPersonalField = (event) => {
    if (event.target.id === "standard-basic") {
      setPersonalField((field) => {
        return {
          ...field,
          alias: event.target.value
        }
      })
    }
     else if (event.target.id === "Estado_Civil") {
       debugger
      setPersonalField((field) => {
        return {
          ...field,
          estado_civil: event.target.value
        }
      })
    }
     else if (event.target.id === "Nacionalidad") {
      setPersonalField((field) => {
        return {
          ...field,
          Nacionalidad: event.target.value
        }
      })
    }
     else if (event.target.id === "País_der_esidencia") {
      setPersonalField((field) => {
        return {
          ...field,
          País_der_esidencia: event.target.value
        }
      })
    }
     else if (event.target.id === "Situación_laboral") {
      setPersonalField((field) => {
        return {
          ...field,
          Situación_laboral: event.target.value
        }
      })
    }
     else if (event.target.id === "Ingresos_mensuales") {
      setPersonalField((field) => {
        return {
          ...field,
          Ingresos_mensuales: event.target.value
        }
      })
    }
     else if (event.target.id === "Origen_de_fondos") {
      setPersonalField((field) => {
        return {
          ...field,
          Origen_de_fondos: event.target.value
        }
      })
    }
  }

  const savePersonalData = () => {
    props.setpersonalData((preState => !preState))

  }
  return <div>
    {props.personalData ?
      <>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Alias </Typography>
          <Typography className='light-blue'> {personalFields.alias}</Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Estado Civil </Typography>
          <Typography className='light-blue'> {personalFields.estado_civil} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Nacionalidad </Typography>
          <Typography className='light-blue'> {personalFields.Nacionalidad} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> País de Residencia </Typography>
          <Typography className='light-blue'> {personalFields.País_der_esidencia} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Profesión </Typography>
          <Typography className='light-blue'> {personalFields.Profesión} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Situación laboral </Typography>
          <Typography className='light-blue'> {personalFields.Situación_laboral} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Ingresos mensuales </Typography>
          <Typography className='light-blue'> {personalFields.Ingresos_mensuales}</Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Origen de fondos </Typography>
          <Typography className='light-blue'> {personalFields.Origen_de_fondos} </Typography>
        </div>
      </>
      :
      <>
        <div className={Styled.fields}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Alias"
            variant="standard"
            type="text"
            name="alias"
            onChange={getPersonalField}
            value={personalFields.alias}
          />
        </div>
        <div className={Styled.fields}>
          <Customselect
            label="Estado Civil"
            Labelid="Estado Civil"
            placholder="Estado Civil"
            Selectid="Estado Civil"
            menuItems={personalFields.estado_civil}
            id="Estado_Civil"
            onChange={getPersonalField}
          />
        </div>
        <div className={Styled.fields}>
          <Customselect
            label="Nacionalidad"
            Labelid="Nacionalidad"
            placholder="Nacionalidad"
            Selectid="Nacionalidad"
            id="Nacionalidad"
            onChange={getPersonalField}
            menuItems={personalFields.Nacionalidad}
          />
        </div>
        <div className={Styled.fields}>
          <Customselect
            label="País de residencia"
            Labelid="País de residencia"
            placholder="País de residencia"
            Selectid="País de residencia"
            id="País_der_esidencia"
            onChange={getPersonalField}
            menuItems={personalFields.País_der_esidencia}
          />
        </div>
        <div className={Styled.fields}>
          <Customselect
            label="Profesión"
            Labelid="Profesión"
            placholder="Profesión"
            Selectid="Profesión"
            id="Profesión"
            onChange={getPersonalField}
            menuItems={personalFields.Profesión}
          />
        </div>
        <div className={Styled.fields}>
          <Customselect
            label="Situación Laboral"
            Labelid="Situación Laboral"
            placholder="Situación Laboral"
            Selectid="Situación Laboral"
            menuItems="Contratada"
            onChange={getPersonalField}
            menuItems={personalFields.Situación_laboral}
          />
        </div>
        <div className={Styled.fields}>
          <TextField
            fullWidth
            id="Ingresos-mensuales"
            label="Ingresos mensuales"
            variant="standard"
            type="text"
            id="Ingresos_mensuales"
            onChange={getPersonalField}
            value={personalFields.Ingresos_mensuales}
          />
        </div>
        <div className={Styled.fields}>
          <Customselect
            label="Ingresos mensuales"
            Labelid="Ingresos mensuales"
            placholder="Ingresos mensuales"
            Selectid="Ingresos mensuales"
            id="Origen_de_fondos"
            onChange={getPersonalField}
            menuItems={personalFields.Origen_de_fondos}
          />
        </div>
        <div className='action-btn'>
          <div className={Styled.fields}>
            <Button type="button" className="button-primary" onClick={savePersonalData}>Guardar</Button>
          </div>
          <div className={Styled.fields}>
            <Button type="button" className="button-secondary-outline " >Descartar</Button>
          </div>
        </div>
      </>}
  </div>;
}

export default DataPersonal;
