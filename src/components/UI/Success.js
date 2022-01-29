import React from 'react';
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import Container from "@mui/material/Container";
import Xcalalogo from "../../components/UI/Xcalalogo";
import success from "./Success.module.scss";
import { Grid, Button } from "@mui/material";
import { Link } from 'react-router-dom';

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
                    {/* <Button className="button-primary">
                    Ingresar a Xcala
                    </Button> */}
                    <Link to="/login" className="button-primary">
                     Ingresar a Xcala 
                    </Link> 
          </Grid>
          <div className={success.completetext}>
             <Link to="/">
             <p>Completar tu registro</p>
             </Link> 
          </div>
          </div>
                 </Container>
  </>
  );
}

export default Success;
