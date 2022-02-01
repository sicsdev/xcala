import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import ObjectiveStepper from '../objective-stepper/Objective-Stepper';
import Styled from "../objectives-interests/Objectives-Interests.module.scss"
function ObjectiveInterest() {
  const [start, setStart] = useState(true);

  const startStepper = () => {
    setStart((preState => !preState));
  }
  return <>
    <div className='grey-bg'>
      {start ?
        <div className='section-padding'>
          <Container sx={{
            maxWidth: "1100px !important",
          }}>
            <Grid container spacing={2}>


              <Grid item md={3}>
                <img src='./assets/images/objective-interests-img.svg' className={Styled.objective_vector_img}></img>
              </Grid>

              <Grid item md={9} >
                <div className={Styled.start_objective_grid}>
                  <Typography variant='h5' className='blue_text font-lg-32'>
                    Conoce el mundo Xcala y ayúdanos a proponerte la mejor inversión para ti...
                  </Typography>
                  <Typography mt={3} variant='h6' className='light-blue font-lg-24'>
                    Nos interesa que inviertas con sentido y sabemos que todos somos distintos. Por eso, tenemos fondos especiales orientados a lo que buscas hacer con tu plata.
                  </Typography>
                  <Button type="button" className="button-primary" onClick={startStepper}>Empezar</Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        :
        <div className="objective_navbar">
          <Container sx={{  
            maxWidth: "444px !important",
          }}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <ObjectiveStepper />
              </Grid>
            </Grid>
          </Container>
        </div>
    }
      </div>
  </>
}

export default ObjectiveInterest;
