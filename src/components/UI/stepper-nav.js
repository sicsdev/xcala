import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import { Grid } from "@mui/material";
function StepperNav({ stepper, steppercolor, objectiveStepper, compleletRegisterStepper }) {

  return <Grid container maxWidth="sm" spacing={2} style={{ justifyContent: "center" }} className='stpper-navbar'>
    {/* <Grid className={steppercolor.comp1 ?  Styles.stepper + ' ' + Styles.active : Styles.stepper} item md={1}>
    <span>1</span>
  </Grid> */}
    {objectiveStepper === 'objective_stepper' ? (
      <>
        <Grid className={stepper === 1 && steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active : steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active + " " + Styles.preactive : ""} item md={1}>
          <span>1</span>
        </Grid>
        <Grid className={stepper === 2 && steppercolor.comp2 ? Styles.stepper + " " + Styles.active : steppercolor.comp2 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>2</span>
        </Grid>
        <Grid className={stepper === 3 && steppercolor.comp3 ? Styles.stepper + " " + Styles.active : steppercolor.comp3 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>3</span>
        </Grid>
      </>
    ) : compleletRegisterStepper === 'compete_registration' ? (
      <>
        <Grid className={stepper === 1 && steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active : steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active + " " + Styles.preactive : ""} item md={1}>
          <span>1</span>
        </Grid>
        <Grid className={stepper === 2 && steppercolor.comp2 ? Styles.stepper + " " + Styles.active : steppercolor.comp2 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>2</span>
        </Grid>
        <Grid className={stepper === 3 && steppercolor.comp3 ? Styles.stepper + " " + Styles.active : steppercolor.comp3 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>3</span>
        </Grid>
        <Grid className={stepper === 4 && steppercolor.comp4 ? Styles.stepper + " " + Styles.active : steppercolor.comp4 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>4</span>
        </Grid>
      </>
    ) :
      <>
        <Grid className={stepper === 1 && steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active : steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active + " " + Styles.preactive : ""} item md={1}>
          <span>1</span>
        </Grid>
        <Grid className={stepper === 2 && steppercolor.comp2 ? Styles.stepper + " " + Styles.active : steppercolor.comp2 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>2</span>
        </Grid>
        <Grid className={stepper === 3 && steppercolor.comp3 ? Styles.stepper + " " + Styles.active : steppercolor.comp3 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>3</span>
        </Grid>
        <Grid className={stepper === 4 && steppercolor.comp4 ? Styles.stepper + " " + Styles.active : steppercolor.comp4 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>4</span>
        </Grid>
        <Grid className={stepper === 5 && steppercolor.comp5 ? Styles.stepper + " " + Styles.active : steppercolor.comp5 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>5</span>
        </Grid>
        <Grid className={stepper === 6 && steppercolor.comp6 ? Styles.stepper + " " + Styles.active : steppercolor.comp6 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>6</span>
        </Grid>
        <Grid className={stepper === 7 && steppercolor.comp7 ? Styles.stepper + " " + Styles.active : steppercolor.comp7 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>7</span>
        </Grid>
        <Grid className={stepper === 8 && steppercolor.comp8 ? Styles.stepper + " " + Styles.active : steppercolor.comp8 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>8</span>
        </Grid>
        <Grid className={stepper === 9 && steppercolor.comp9 ? Styles.stepper + " " + Styles.active : steppercolor.comp9 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
          <span>9</span>
        </Grid>
      </>
    }

  </Grid >
}
export default StepperNav;
