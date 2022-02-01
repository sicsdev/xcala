import React from 'react';
import Container from "@mui/material/Container";
import Xcalalogo from "../../components/UI/Xcalalogo";
import reset from "./Resetpasswordemail.module.scss";
import { Grid, Typography } from '@mui/material';

function Resetpasswordemail() {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container maxWidth="sm" spacing={2}>
          <Grid item xs={12} md={12} mb={3}>
            <Xcalalogo />
          </Grid>
          <Grid item xs={12} md={12} mb={3}>
            <div className={reset.email_logo}>
              <img src="/assets/images/reset_email.png" alt="success"></img>

              <Typography className={reset.h3} variant="" component="h3" align='justify'>
                Revisa tu correo
              </Typography>
              <Typography className={reset.p} variant="body1" component="" align='justify'>
                Haz click en el link que acabamos de enviar <b>m*********rez@gmail.com</b> para que puedas configurar tu nueva constraseña.
              </Typography>
            </div>
          </Grid>
          </Grid>
      </Container>
    </>
  );
}

export default Resetpasswordemail;
