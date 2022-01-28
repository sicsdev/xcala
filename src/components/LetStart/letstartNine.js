import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartNine(props) {
  props.setSteppercomp("comp9")

  // const Handlestep = () => {
  //   props.setstepper(1)
  //   props.setSteppercomp("comp10")
  //   props.setSteppercolor(first => {
  //     return {
  //       ...first,
  //       comp1: true
  //     }
  //   })
  // }
  return (

    <Grid container maxWidth="sm" spacing={2}>
      <Grid item md={12} mt={3} style={{ margin: "20px auto" }}>
        <Typography
          variant="h6"
          style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
        >
         Finalmente ¿Cómo esperás que evolucione tu capacidad de ahorro en los próximos años?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button">Disminuirá</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button">Se mantendrá</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button">Aumentará</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartNine;
