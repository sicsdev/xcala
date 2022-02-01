import React from 'react';
import Typography from '@mui/material/Typography';
import { Checkbox, Grid } from "@mui/material";
import StepOneCard from './stepone-card/StepOne-Card';
import TodayIcon from '@mui/icons-material/Today';
import InsightsIcon from '@mui/icons-material/Insights';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Button from '../UI/Button';
function ObjectiveSelectorOne(props) {
  const secondStep = () => {
    props.setstepper(2)
    props.setSteppercolor(first => {
      return {
        ...first,
        comp1: true,
        comp2: true
      }
    })
  }
  return (
    <>
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} style={{ margin: "50px auto 30px auto" }}>
          <Typography
            variant="h6"
            className='light-blue font-lg-24'
          >
            A ti... ¿Qué te motiva a invertir?
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
          <StepOneCard icon={<TodayIcon />} heading="Generar un ingreso mensual extra" subheading="Obtener dividendos mensuales de mi inversión." checkbox={<Checkbox />} />
          <StepOneCard icon={<InsightsIcon />} heading="Hacer crecer mi plata" subheading="O generar ganancias en el tiempo." checkbox={<Checkbox />} />
          <StepOneCard icon={<LocalFloristIcon />} heading="Ganar con próposito e impacto" subheading="Ganar con próposito e impacto" checkbox={<Checkbox />} />

         

          <Typography
            className='light-grey text-center '
            style={{ margin: "50px auto 10px auto" }}
          >
            Podrás modificar tus preferencias siempre que lo desees desde la opción de menú Mi Cuenta.
          </Typography>
          <Button className="button-primary " onClick={secondStep}>Continuar</Button>
        </Grid>
      </Grid >
    </>
  );
}

export default ObjectiveSelectorOne;
