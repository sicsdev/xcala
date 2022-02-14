import React from 'react';
import Typography from '@mui/material/Typography';
import { Checkbox, Grid } from "@mui/material";
import Button from '../UI/Button';
import StepTwoCard from './stepone-card/StepTwo-Card';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import stepperThree from '../../data/stepperThree.json'

function ObjectiveSelectorThree(props) {

  const finalStep = () => {
    props.setstepper(4)
  }
  return (
    <>
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} style={{ margin: "50px auto 30px auto" }}>
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
        <Grid item md={12}>

        {stepperThree.map((data) => (
          <StepTwoCard key={data.id}
          icon={data.icon} 
          heading={data.heading}
          checkbox={<Checkbox />} />
        ))}
          {/* <StepTwoCard icon={<DevicesOutlinedIcon />} heading="Tecnología" checkbox={<Checkbox />} />
          <StepTwoCard icon={<SpaSharpIcon />} heading="Medio ambiente" checkbox={<Checkbox />} />
          <StepTwoCard icon={<AutoStoriesSharpIcon />} heading="Cultura" checkbox={<Checkbox />} />
          <StepTwoCard icon={<BarChartSharpIcon />} heading="Economía" checkbox={<Checkbox />} />
          <StepTwoCard icon={<BiotechSharpIcon />} heading="Ciencia" checkbox={<Checkbox />} />  */}

          <Typography
            className='light-grey text-center '
            style={{ margin: "50px auto 10px auto" }}
          >
            Podrás modificar tus preferencias siempre que lo desees desde la opción de menú Mi Cuenta.
          </Typography>
          <Button className="button-primary " onClick={finalStep}>Continuar</Button>
        </Grid>
      </Grid >
    </>
  );
}

export default ObjectiveSelectorThree;
