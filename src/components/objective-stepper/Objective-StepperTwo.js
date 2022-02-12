import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Checkbox, Grid, TextField } from "@mui/material";
import Button from '../UI/Button';
import StepTwoCard from './stepone-card/StepTwo-Card';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import stepperTwo from '../../data/stepperTwo.json'

function ObjectiveSelectorTwo(props) {
  const [goal, setGoal] = useState(false);

  const checkmark = (e) => {
      setGoal((prevState => !prevState))
  }
  const thirdStep = () => {
    props.setstepper(3)
    props.setSteppercolor(first => {
      return {
        ...first,
        comp3: true,
      }
    })
  }
  return (
    <>
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} xs={12} style={{ margin: "50px auto 30px auto" }}>
          <Typography
            variant="h6"
            className='light-blue font-lg-24'
          >
            ¿Qué objetivos quisieras cumplir con las ganancias de tu inversión?
          </Typography>
          <Typography
            className='light-grey font-lg-18'
          >
            (Puedes seleccionar más de una opción)
          </Typography>
        </Grid>
      </Grid >
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} xs={12}>

        {stepperTwo.map((data) => (
        <StepTwoCard  key={data.id}
         heading={data.heading}
        checkbox={<Checkbox onChange={checkmark} />} />
        ))}

          {/* <StepTwoCard icon={<DirectionsCarFilledIcon />} heading="Comprarte un auto" checkbox={<Checkbox onChange={checkmark} />} />
          <StepTwoCard icon={<DirectionsWalkIcon />} heading="Mejorar tu jubilación" checkbox={<Checkbox onChange={checkmark} />} />
          <StepTwoCard icon={<BeachAccessIcon />} heading="Las vacaciones soñadas" checkbox={<Checkbox onChange={checkmark} />} />
          <StepTwoCard icon={<AccountBalanceIcon />} heading="Comprar tu casa" checkbox={<Checkbox onChange={checkmark} />} />
          <StepTwoCard icon={<MonetizationOnOutlinedIcon />} heading="Ahorrar para imprevistos" checkbox={<Checkbox onChange={checkmark} />} />
          <StepTwoCard icon={<HelpOutlineOutlinedIcon />} heading="Otro" checkbox={<Checkbox onChange={checkmark} />} /> */}
          
          {goal ?
            <div className='objective-field'>
              <TextField
                fullWidth
                id="standard-basic"
                label="Describe tu objetivo"
                variant="standard"
                type="text"
              />
            </div>
            : ''}
          <Typography
            className='light-grey text-center '
            style={{ margin: "50px auto 10px auto" }}
          >
            Podrás modificar tus preferencias siempre que lo desees desde la opción de menú Mi Cuenta.
          </Typography>
          <Button className="button-primary " onClick={thirdStep}>Continuar</Button>
        </Grid>
      </Grid >
    </>
  );
}

export default ObjectiveSelectorTwo;
