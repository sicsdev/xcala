import React from 'react';
import Backgroundscreen from '../Backgroundscreen';
import Container from "@mui/material/Container";
import Xcalalogo from '../Pages/Xcalalogo';
import success from "./Success.module.scss";
import { Grid, Button } from "@mui/material";

function Success() {
  return( 
  <>
        <Backgroundscreen />
        <Container maxWidth="sm">
          <Xcalalogo/>
          <div className={success.verificationsuccesslogo}>
             <img src="/assets/images/success.png" alt="success"></img>
          
          <div className={success.successtext}>
              <p>¡Cuenta creada exitosamente!</p>
          </div>
          <Grid className="formbutton" item md={12}>
                    <Button className="button-primary">
                    Ingresar a Xcala
                    </Button>
          </Grid>
          <div className={success.completetext}>
              <p>Completar tu registro</p>
          </div>
          </div>
                 </Container>
  </>
  );
}

export default Success;
