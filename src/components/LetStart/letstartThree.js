import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartThree(props) {
  props.setSteppercomp("comp3")

  const Handlestep = () => {
    props.setstepper(4);
    props.setSteppercomp("comp4")
    props.setSteppercolor(first => {
      return {
        ...first,
        comp4: true,
      }
    })
  }
  return (

    <Grid container maxWidth="sm" >
      <Grid item md={12} xs={12} mt={3} style={{ margin: "20px auto" }}>
        <Typography
          variant="h6"
          style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
        >
        ¿Cuál es tu principal objetivo?
        </Typography>
      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button"  className='card-bordered'onClick={Handlestep}>Asegurar y mantener mi capital</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button"  className='card-bordered' onClick={Handlestep}>Aumentar mi patrimonio, ojalá con retornos estables</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button"  className='card-bordered' onClick={Handlestep}>Que mi dinero crezca sin importar los riesgos</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartThree;
