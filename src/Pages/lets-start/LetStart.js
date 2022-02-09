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
import StepperNav from '../../components/UI/stepper-nav';
function LetStart() {

  const [stepper, setstepper] = useState(1);
  const [steppercomp, setSteppercomp] = useState("comp2");
  const [steppercolor, setSteppercolor] = useState({ comp1: true, comp2: false, comp3: false, comp4: false, comp5: false, comp6: false, comp7: false, comp8: false, comp9: false });

  const Handleback = () => {
    setstepper(stepper - 1);
    setSteppercolor(first => {
      return {
        ...first,
        [steppercomp]: false,
      }
    })
  }

  return (
    <div className="page_content stepper-main-wrapper">
      <Container sx={{
        maxWidth: "444px !important",
      }}>

        <StepperNav stepper={stepper} steppercolor={steppercolor} className={`StepperNav ${Styles.lets_stepper_nav}`} />


        <Grid container maxWidth="sm" className={Styles.letstart_grid}>
          {stepper === 1 ? (
            <>
              <LetStartOne setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercolor={setSteppercolor} />
            </>
          ) : ''}
          {stepper === 2 ? (
            <>
              <LetStartTwo setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 3 ? (
            <>
              <LetStartThree setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 4 ? (
            <>
              <LetStartFour setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 5 ? (
            <>
              <LetStartFive setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 6 ? (
            <>
              <LetStartSix setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 7 ? (
            <>
              <LetStartSeven setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 8 ? (
            <>
              <LetStartEight setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
            </>
          ) : ''}
          {stepper === 9 ?
            <>
              <LetStartNine setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} setSteppercomp={setSteppercomp} />
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
