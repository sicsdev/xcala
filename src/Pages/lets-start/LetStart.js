import React, { useState } from 'react';
import Styles from "../lets-start/letStart.module.scss"
import Container from "@mui/material/Container";
import { Grid, Link } from "@mui/material";
import LetStartOne from '../../components/LetStart/letstartOne';
import LetStartTwo from '../../components/LetStart/letstartTwo';
import LetStartThree from '../../components/LetStart/letstartThree';
import LetStartFour from '../../components/LetStart/letstartFour';
import LetStartFive from '../../components/LetStart/letstartFive';
import LetStartSix from '../../components/LetStart/letstartSix';
import LetStartSeven from '../../components/LetStart/letstartSeven';
import LetStartEight from '../../components/LetStart/letstartEight';
import LetStartNine from '../../components/LetStart/letstartNine';

function LetStart() {

  const [stepper, setstepper] = useState(1);
  const [steppercomp, setSteppercomp] = useState("comp2");
  console.log("steppercomprtrrrtrrtrtrt", steppercomp)
  const [steppercolor, setSteppercolor] = useState({ comp1: true, comp2: false, comp3: false, comp4: false, comp5: false, comp6: false, comp7: false, comp8: false, comp9: false });

  const Handleback = () => {
    setstepper(stepper - 1);
    console.log("steppercomp", steppercomp)
    setSteppercolor(first => {
      return {
        ...first,
        [steppercomp] : false,
      }
    })
  }

  return (
    <div className="page_content">
      <Container sx={{
        maxWidth: "444px !important",
      }}>
        <Grid container maxWidth="sm" spacing={2} style={{ justifyContent: "center" }}>
          {/* <Grid className={steppercolor.comp1 ?  Styles.stepper + ' ' + Styles.active : Styles.stepper} item md={1}>
            <span>1</span>
          </Grid> */}
          <Grid className={stepper === 1 && steppercolor.comp1 ? Styles.stepper + ' ' + Styles.active : steppercolor.comp1 ? Styles.stepper + ' '+ Styles.active + " " + Styles.preactive : ""} item md={1}>
            <span>1</span>
          </Grid>
          <Grid className={stepper === 2 && steppercolor.comp2 ? Styles.stepper + " " + Styles.active : steppercolor.comp2 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper} item md={1}>
            <span>2</span>
          </Grid>
          <Grid className={stepper === 3 && steppercolor.comp3 ? Styles.stepper + " " + Styles.active : steppercolor.comp3 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>3</span>
          </Grid>
          <Grid className={stepper === 4 && steppercolor.comp4 ? Styles.stepper + " " + Styles.active : steppercolor.comp4 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>4</span>
          </Grid>
          <Grid className={stepper === 5 && steppercolor.comp5 ? Styles.stepper + " " + Styles.active : steppercolor.comp5 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>5</span>
          </Grid>
          <Grid className={stepper === 6 && steppercolor.comp6 ? Styles.stepper + " " + Styles.active : steppercolor.comp6 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>6</span>
          </Grid>
          <Grid className={stepper === 7 && steppercolor.comp7 ? Styles.stepper + " " + Styles.active : steppercolor.comp7 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>7</span>
          </Grid>
          <Grid className={stepper === 8 && steppercolor.comp8 ? Styles.stepper + " " + Styles.active : steppercolor.comp8 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>8</span>
          </Grid>
          <Grid className={stepper === 9 && steppercolor.comp9 ? Styles.stepper + " " + Styles.active : steppercolor.comp9 ? Styles.stepper + " " + Styles.active + " " + Styles.preactive : Styles.stepper}  item md={1}>
            <span>9</span>
          </Grid>
        </Grid>

        <Grid container mt={5} maxWidth="sm" spacing={2}>
          {stepper === 1 ? (
            <>
              <LetStartOne setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercolor= {setSteppercolor}/>
            </>
          ) : ''}
          {stepper === 2 ? (
            <>
              <LetStartTwo setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercolor ={setSteppercolor}  setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 3 ? (
            <>
              <LetStartThree setstepper={setstepper} stepper={stepper}setSteppercolor={setSteppercolor} setSteppercolor = {setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 4 ? (
            <>
              <LetStartFour setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 5 ? (
            <>
              <LetStartFive setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 6 ? (
            <>
              <LetStartSix setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 7 ? (
            <>
              <LetStartSeven setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 8 ? (
            <>
              <LetStartEight setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
          ) : ''}
          {stepper === 9 ?
            <>
              <LetStartNine setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp = {setSteppercomp}/>
            </>
            : ''}

          {stepper > 1 ? <div className={Styles.back_btn} >
            <Link component="button" onClick={Handleback}><img src="/assets/images/left-arrow.svg"></img>Volver</Link>
          </div> : ""}
        </Grid>
      </Container>
    </div>
  );
}

export default LetStart;
