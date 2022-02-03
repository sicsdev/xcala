import React, { useState } from 'react';
import CompleteRegisterFour from '../../components/complete-register-step/Complete-RegisterFour';
import CompleteRegisterOne from '../../components/complete-register-step/Complete-RegisterOne';
import CompleteRegisterThree from '../../components/complete-register-step/Complete-RegisterThree';
import CompleteRegisterTwo from '../../components/complete-register-step/Complete-RegisteTwo';
// import ErrorStep from '../../components/UI/errorStep';
import StepperNav from '../../components/UI/stepper-nav';
import SuccessStep from '../../components/UI/successStep';
function CompleteRegisterStepper(props) {
  const [stepper, setstepper] = useState(1);
  const [steppercolor, setSteppercolor] = useState({ comp1: true, comp2: false, comp3: false, comp4: false });
  return <>
    {stepper === 5 ? null :
      <StepperNav stepper={stepper} steppercolor={steppercolor} compleletRegisterStepper="compete_registration" />
    }
    {stepper === 1 ? (
      <CompleteRegisterOne setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 2 ? (
      <CompleteRegisterTwo setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 3 ? (
      <CompleteRegisterThree setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 4 ? (
      <CompleteRegisterFour setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 5 ? (
      <SuccessStep Success_heading="¡Felicidades, completaste tu registro!" Success_btn="Ver tus recomendaciones" setBack={props.setBack}/>
      // <ErrorStep  setBack={props.setBack}/>
    ) : ''}
  </>;
}

export default CompleteRegisterStepper;
