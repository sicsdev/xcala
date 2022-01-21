import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Rectangle from "../images/Rectangle.png";
import xcalalogo from "../logo/logoxcala.png";
import './1.module.scss';
import messagebox from "../images/messagebox.png"
import vector from "../images/Vector.png"

function Firstpage() {
  return (
       <React.Fragment>
          <CssBaseline />
          
          <div className='xcala-logo'>
             <img src={xcalalogo}></img>
          </div>

            <div className='rectangle-heading'>
                <img src={Rectangle}></img>
                <p1>¡Únete a Xcala!</p1>
            </div>

            <div className='rectangle-p'>
            <p>Invierte seguro, invierte con propósito...</p>
            </div>

             <Container maxWidth="sm">
                 <div className='bluebox'>
                     <div className='p1'>
                         <img src={messagebox}></img>
                         <p>Recibirás en tu correo una clave temporal para ingresar a tu cuenta de prueba.</p>
                     </div>
                     <div className='p2'>
                         <img src={vector}></img>
                         <p>Define tu perfil de riesgo y revisa nuestras recomendaciones personalizadas.</p>
                     </div>
                 </div>
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
                  <TextField fullWidth id="standard-basic" label="RUT" variant="standard" />
                </div>
                <div className='register-input-text'>
                  <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
                </div>

             </Container>
        </React.Fragment>
  );
}

export default Firstpage;
