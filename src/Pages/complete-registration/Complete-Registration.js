import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import PortraitIcon from '@mui/icons-material/Portrait';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Styled from "../complete-registration/Complete-Registration.module.scss"
import CompleteRegisterStepper from '../complete-register-stepper/Complete-Register-Stepper';
function CompleteRegistration() {
  const [start, setStart] = useState(true);
  const [back, setBack] = useState(true);


  const continueRegistration = () => {
    setStart((preState => !preState));
  }
  return <>
    <div className='full-heigt grey-bg'>
      <div className={Styled.complete_registraion_main}>
        <Container maxWidth="sm"  style={{
          maxWidth: "667px !important",
        }}>
          {start ?
            <div className={Styled.registration_wrapper}>
              <Grid container spacing={2} className={Styled.registration_first_step}>
                <Grid item md={12} mb={3}>
                  <div className={Styled.rectangle_heading}>
                    <Typography
                      className='museo-regular font-lg-24'
                    >
                      <img src="/assets/images/Rectangle.png" alt=""></img>  Completa tu registro
                    </Typography>
                    <Typography
                      mt={4}
                      className='font-lg-18'
                    >
                      Antes de realizar tu primera inversión necesitas <strong>completar tu registro en Xcala.</strong> Sólo tardarás un par de minutos y ganarás mucho a cambio.
                    </Typography>
                    <Typography
                      className='font-lg-18'
                      mt={3}
                      mb={3}
                    >
                      Ten en cuenta que:
                    </Typography>
                  </div>
                  <div className={Styled.identity}>
                    <PortraitIcon />
                    <div
                      className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='font-lg-18'>
                        Debes tener tu cédula de identidad o pasaporte a la mano
                      </Typography>
                    </div>
                  </div>
                  <div className={Styled.identity}>
                    <PhoneAndroidIcon />
                    <div
                      className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='font-lg-18'>
                        Debes tener tu cédula de identidad o pasaporte a la mano
                      </Typography>
                    </div>
                  </div>
                  <div className={Styled.continue_btn}>
                    <Button className="button-primary" onClick={continueRegistration}>Continuar</Button>
                  </div>
                </Grid>
              </Grid>

            </div>
            :
            <div className= {back ? ("complete_registration_navbar") : "" }>
              <Container sx={{
                maxWidth: "500px !important",
              }}>
                <Grid container spacing={0}>
                  <Grid item md={12}>
                    <CompleteRegisterStepper setBack = {setBack} />
                  </Grid>
                </Grid>
              </Container>
            </div>
          }
        </Container>
      </div>
    </div>
  </>
}

export default CompleteRegistration;
