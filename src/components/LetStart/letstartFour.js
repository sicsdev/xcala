import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartFour(props) {
  props.setSteppercomp("comp4")

  const Handlestep = () => {
    props.setstepper(5);
    props.setSteppercomp("comp5")

    props.setSteppercolor(first => {
      return {
        ...first,
        comp5: true
      }
    })
  }
  return (

    <Grid container maxWidth="sm" spacing={2}>
      <Grid item md={12} mt={3} style={{ margin: "20px auto" }}>
        <Typography
          variant="h6"
          style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
        >
          ¿Cómo obtuviste el dinero que quieres invertir?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Básciamente mediante mi trabajo</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Mediante mi trabajo, más algunos ahorros</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>De otras rentas no relacionadas con mi trabajo</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartFour;
