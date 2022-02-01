import React, { useState } from 'react';
import ObjectiveStepperFinal from '../../components/objective-stepper/Objective-StepperFinal';
import ObjectiveSelectorOne from '../../components/objective-stepper/Objective-StepperOne';
import ObjectiveSelectorThree from '../../components/objective-stepper/Objective-StepperThree';
import ObjectiveSelectorTwo from '../../components/objective-stepper/Objective-StepperTwo';
import StepperNav from '../../components/UI/stepper-nav';
function ObjectiveStepper(props) {
  const [stepper, setstepper] = useState(1);
  const [steppercolor, setSteppercolor] = useState({ comp1: true, comp2: false, comp3: false });
  return <>
    {stepper === 4 ? null :
      <StepperNav stepper={stepper} steppercolor={steppercolor} objectiveStepper="objective_stepper" />
    }
    {stepper === 1 ? (
      <ObjectiveSelectorOne setstepper={setstepper} stepper={stepper}  setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 2 ? (
      <ObjectiveSelectorTwo setstepper={setstepper} stepper={stepper}  setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 3 ? (
      <ObjectiveSelectorThree setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
    ) : ''}
    {stepper === 4 ? (
      <ObjectiveStepperFinal setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
    ) : ''}
  </>;
}

export default ObjectiveStepper;
