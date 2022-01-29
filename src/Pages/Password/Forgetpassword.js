import React from 'react';
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import "react-phone-number-input/style.css";
import Xcalalogo from "../../components/UI/Xcalalogo";
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import forgetpasswordstyles from "./Forgetpassword.module.scss"
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Forgetpassword() {
  return (
<>
    <Backgroundscreen/>

        <Container maxWidth="sm">
            <Xcalalogo/>
            <div className={forgetpasswordstyles.form_login}>
            <div className={forgetpasswordstyles.form_inner}>
            <Typography className={forgetpasswordstyles.h3} variant="" component="h3" align='justify'>
            ¿Olvidaste tu contraseña?
            </Typography>
            <Typography className={forgetpasswordstyles.color_p} variant="body1" component="" align='justify'>
            No te preocupes, a todos nos pasa...
            </Typography>
            <div className={forgetpasswordstyles.p}>
            <Typography className="p-16"  variant="" component="">
            Ingresa tu email o RUT y enviaremos un correo a tu email registrado para que puedas configurar una nueva contraseña.
            </Typography>
            </div>
                <form>
                  <div className={forgetpasswordstyles.register_input_text}>
                  <TextField
                      fullWidth
                      id="standard-basic"
                      label="Email o RUT"
                      variant="standard"
                      type="email"
                    />
                  </div>
                </form>
          <Grid className="formbutton" item md={12}>
                    {/* <Button className="button-primary">
                    Enviar correo
                    </Button> */}
                    <Link to="/resetpassword" className="button-primary">
                    Enviar correo
                    </Link>
          </Grid>
          </div>
          </div>
        </Container>  
           
  </>
  );
}

export default Forgetpassword;
