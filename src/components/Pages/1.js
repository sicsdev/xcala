import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Select, Checkbox, Button } from '@mui/material';
import Rectangle from "../images/Rectangle.png";
import xcalalogo from "../../assets/logo.svg";
import './1.module.scss';
import messagebox from "../../assets/regis-icon-2.svg"
import vector from "../../assets/regis-icon-1.svg"

function Firstpage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='register-wrapper'>
        <Container maxWidth="sm">
          <Grid container maxWidth="sm" spacing={2} >
            <Grid item md={12}>
              <div className='xcala-logo'>
                <img src={xcalalogo} alt='logo'></img>
              </div>
            </Grid>
            <Grid item md={12} mb={3}>
              <div className='rectangle-heading'>
                <img src={Rectangle} alt=''></img>
                <p1>¡Únete a Xcala!</p1>
              </div>

              <div className='rectangle-p'>
                <p>Invierte seguro, invierte con propósito...</p>
              </div>
            </Grid>
          </Grid>
          <div className='form-register'>
            <div className='form-inner'>
              <Grid container maxWidth="sm" spacing={2} className='bluebox'  >
                <Grid item md={12}>
                  <div style={{ display: "flex" }}>
                    <img src={messagebox} alt='' width={20} height={20} style={{ paddingTop: "5px" }}></img>
                    <div className='p1' style={{ paddingLeft: "10px" }}>
                      <p>Recibirás en tu correo una clave temporal para ingresar a tu cuenta de prueba.</p>
                    </div>
                  </div>
                </Grid>
                <Grid item md={12} style={{ paddingTop: "0" }}>
                  <div style={{ display: "flex" }}>
                    <img src={vector} alt='' width={20} height={20} style={{ paddingTop: "5px" }}></img>
                    <div className='p1' style={{ paddingLeft: "10px" }}>
                      <p>Define tu perfil de riesgo y revisa nuestras recomendaciones personalizadas.</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container maxWidth="sm" >
                <div className='register-input-text'>
                  <TextField fullWidth id="standard-basic" label="Nombre" variant="standard" />
                </div>
                <div className='register-input-text'>
                  <TextField fullWidth id="standard-basic" label="Apellido materno" variant="standard" />
                </div>
                <div className='register-input-text'>
                  <TextField fullWidth id="standard-basic" label="Apellido paterno" variant="standard" />
                </div>
                <div className='register-input-text'>
                  <TextField id="standard-basic" label="RUT" variant="standard" />
                </div>
                <div className='register-input-text'>
                  <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
                </div>
                <div className='register-input-text'>
                  <Grid container maxWidth="sm" spacing={2}>
                    <Grid item md={3} style={{ paddingTop: "0" }}>
                      <Select fullWidth id="standard-basic" label="Email" variant="standard" />
                    </Grid>
                    <Grid item md={9} style={{ paddingTop: "0" }}>
                      <TextField fullWidth id="standard-basic" label=""variant="standard" />
                    </Grid>
                  </Grid>
                </div>
                <div className='register-input-text'>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <Checkbox />
                    <div className='p1' style={{ paddingLeft: "10px" }}>
                      <p>Acepto los <span>términos y condiciones del servicio </span>de Xcala.</p>
                    </div>
                  </div>
                </div>
                <Grid item md={12}>
                  <Button fullWidth className="button-primary" disabled>Continuar</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment >
  );
}

export default Firstpage;
