import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Styled from "../../Pages/complete-registration/Complete-Registration.module.scss";
import Button from '../UI/Button';
function CompleteRegisterFour({ setstepper, setSteppercolor }) {

  const finalStep = () => {
    setstepper(5)
    setSteppercolor(first => {
      return {
        ...first,
        comp5: true,
      }
    })
  }
  return (
    <>
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} xs={12} className='stepper-grid-registration'>
          <Typography
            variant="h6"
            className='blue_text fw-600 font-lg-24'
          >
            Firma electrónica
          </Typography>

          <div className={Styled.list_items}>
            <Typography
              mt={3}
              className='light-grey font-lg-18'
            >
              A continuación te compartimos los principales puntos del Mandato Mercantil.
            </Typography>
            <ul className='light-grey'>
              <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
              <li> uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={Styled.complete_registration_btn}>
        <Grid className="formbutton" item md={6} xs={12}>
          <Button className="light-button-primary">
            Cancelar
          </Button>
        </Grid>
        <Grid className="formbutton" item md={6} xs={12}>
          <Button className="button-primary" onClick={finalStep}>
            Firmar mandato
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CompleteRegisterFour;
