import React from 'react';
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import Container from "@mui/material/Container";
import Xcalalogo from "../../components/UI/Xcalalogo";
import success from "./Success.module.scss";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';

function Success() {
   return (
      <>
         <Backgroundscreen />
         <Container maxWidth="sm">
            <Grid container maxWidth="sm" spacing={2}>
               <Grid item xs={12} md={12} mb={3}>
                  <Xcalalogo />
               </Grid>
            </Grid>
            <div className={success.verificationsuccesslogo}>
            <img src="/assets/images/sucess-gif.gif" alt="success" style={{ mixBlendMode: 'multiply', margin: "0 auto", width: "100%" }}></img>
               <div className={success.successtext}>
                  <p>¡Cuenta creada exitosamente!</p>
               </div>
               <Grid className={success.button_xcala}item md={12}>
                  {/* <Button className="button-primary">
                    Ingresar a Xcala
                    </Button> */}
                  <Link to="/login" className="button-primary">
                     Ingresar a Xcala
                  </Link>
               </Grid>
               <div className={success.completetext}>
                  <Link to="/" className='blue_text fw-600'>
                     Completar tu registro
                  </Link>
               </div>
            </div>
         </Container>
      </>
   );
}

export default Success;
