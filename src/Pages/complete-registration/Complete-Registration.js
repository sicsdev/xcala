import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import ObjectiveStepper from '../objective-stepper/Objective-Stepper';
import Styled from "../complete-registration/Complete-Registration.module.scss"
function CompleteRegistration() {
  const [start, setStart] = useState(true);

  const startStepper = () => {
    setStart((preState => !preState));
  }
  return <>
    <div className='grey-bg'>
      {start ?
        <div className='section-padding'>
          <Container sx={{
            maxWidth: "667px !important",
          }}>
            <Grid container spacing={2} className='complete-registeration'>
              <Grid item md={12} mb={3}>
                <div className={Styled.rectangle_heading}>
                  <Typography
                    variant="h5"
                    className='museo-regular font-lg-24'
                  >
                    <img src="/assets/images/Rectangle.png" alt=""></img>  Completa tu registro
                  </Typography>
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

export default CompleteRegistration;
