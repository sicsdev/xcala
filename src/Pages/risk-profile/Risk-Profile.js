import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Styled from '../risk-profile/Risk-Profile.module.scss'
import ProductRiskSlider from '../../components/productgraph/Product-Risk-Slide';
function RiskProfile() {
  return <>
    <div className={Styled.top_banner}>
      <Container maxWidth="lg">
        <Typography className='museo-regular font-lg-24'  >
          <img src="/assets/images/Rectangle.png" alt=""></img>&nbsp;    Mi perfil de riesgo
        </Typography>
        <Grid container spacing={5} mt={1}>
          <Grid item xs={12}>
            <div className={`card-bordered ${Styled.card_border}`}>
              <Grid container>
                <Grid item xs={10} md={9}>
                  <Typography
                    className="font-lg-24 blue_text"
                    variant="h4"
                  >
                    Marcela, tu perfil de inversionista es <strong> Conservador</strong>
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2}>
                  <div className='text-right icon-img'>
                    <img src="/assets/images/Iconos-Perfiles.svg"></img>
                  </div>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography
                    className="font-lg-20"
                    mt={2}
                  >
                    Prefieres tener inversiones con un nivel de riesgo menor, es decir invertir el 100% de tu dinero en instrumentos más seguros aunque de menor rendimiento.
                  </Typography>

                </Grid>
                <Grid item xs={12} md={9} mt={2}>
                  <Button className='button-secondary-outline'>Reevaluar mi perfil</Button>

                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    <div className='light-skyblue-bg' >
      <Container maxWidth="lg" className={Styled.risk_profile_graph}>
        <Grid container>
          <Grid item lg={12}>
            <div className={Styled.page_wrapper}>
              <div className={Styled.heading}>
                <img src="/assets/images/product_rect.png" alt=""></img>
                <Typography className='museo-regular font-lg-28' >
                  Te proponemos estos fondos <span className='blue_text'> para ti</span>
                </Typography>
              </div>
              <div className={Styled.p}>
                <Typography
                  className={`font-lg-20 ${Styled.fadetext}`}
                >
                  Invierte tranquila... Podrás invertir desde $10 mil y sacar tu plata cuando la necesites.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} className='new-user-graph'>
          <Grid item lg={12} xs={12}>
            <ProductRiskSlider />
          </Grid>
        </Grid>

      </Container>
    </div>
  </>;
}

export default RiskProfile;
