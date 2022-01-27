import React from 'react';
import Container from "@mui/material/Container";
import Xcalalogo from "../../components/UI/Xcalalogo";
import reset from "./Resetpasswordemail.module.scss";
import { Typography } from '@mui/material';

function Resetpasswordemail() {
  return (
  <>
        <Container maxWidth="sm">
          <Xcalalogo/>
          <div className={reset.email_logo}>
             <img src="/assets/images/reset_email.png" alt="success"></img>
          
          <Typography className={reset.h3} variant="" component="h3" align='justify'>
          Revisa tu correo
            </Typography>
            <Typography className={reset.p}  variant="body1" component="" align='justify'>
            Haz click en el link que acabamos de enviar <b>m*********rez@gmail.com</b> para que puedas configurar tu nueva constraseña. 
            </Typography>
          </div>
        </Container>  
  </>
  );
}

export default Resetpasswordemail;
