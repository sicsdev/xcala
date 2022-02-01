import React from 'react';
import { Button, Container, Grid, Link, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Styled from '../new-user/New-User.module.scss'
import Productgraph from '../../components/productgraph/Productgraph';
function NewUser() {
  return <>
    <div className={Styled.top_banner}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <div className={Styled.card_border}>
              <Grid container>
                <Grid item xs={9}>
                  <Typography
                    className="font-lg-24 light-blue"
                    variant="h4"
                  >
                    Marcela, tu perfil de inversionista es Conservador
                  </Typography>
                  <Typography
                    className="font-lg-20"
                    mt={2}
                  >
                    Prefieres tener inversiones con un nivel de riesgo menor, es decir invertir el 100% de tu dinero en instrumentos más seguros aunque de menor rendimiento.
                  </Typography>
                  <Typography
                    className={Styled.edit_icon}
                    mt={2}
                  >
                    <Link className="dark-green fw-600"><EditIcon /> Editar</Link>
                  </Typography>

                </Grid>
                <Grid item xs={3}>
                  <div className='text-right'>
                    <img src="/assets/images/Iconos-Perfiles.svg"></img>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    <div className='light-skyblue-bg'style={{ paddingBottom: "5rem" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <div className={Styled.new_card}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className="font-lg-32 blue_text"
                    variant="h4"
                  >
                    Nuestros fondos tienen propósitos...
                  </Typography>
                </Grid>
              </Grid>
              <Grid container mt={3}>
                <Grid item xs={8}>
                  <Typography
                    className="font-lg-18 dark-grey"
                    variant="h4"
                  >
                    ¿Qué te motiva a invertir? ¿Tienes un objetivo en mente? ¿Te interesa un área en particular?
                  </Typography>
                  <Typography
                    className="dark-grey"
                    mt={2}
                  > Configura tus recomendaciones de acuerdo a lo que te gusta o lo que quieres lograr.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div className='text-right padding-btn'>
                    <Button className='button-secondary-outline fw-600'>Define tus objetivos e intereses</Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div className={Styled.page_wrapper}>
              <div className={Styled.heading}>
                <img src="/assets/images/product_rect.png" alt=""></img>
                <Typography className={Styled.h2} >
                  Nuestros fondos
                </Typography>
              </div>
              <div className={Styled.p}>
                <Typography
                  className={Styled.fadetext}
                  variant=""
                  component=""
                >
                  Invierte tranquila... Podrás invertir desde $10 mil y sacar tu
                  plata cuando la necesites.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} className='new-user-graph'>
          <Grid item lg={6}>
            <Productgraph />
          </Grid>
          <Grid item lg={6}>
            <Productgraph />
          </Grid>
          <Grid item lg={12}>
            <div className={Styled.see_more}>
              <Button className='button-secondary-outline fw-600'>Ver más opciones de inversión</Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <div className={Styled.new_card}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className="font-lg-24 blue_text"
                    variant="h4"
                  >
                   ¿Aún no has completado tu registro?
                  </Typography>
                </Grid>
              </Grid>
              <Grid container mt={3}>
                <Grid item xs={8}>
                  <Typography
                    className="font-lg-18 dark-grey"
                    variant="h4"
                  >
                   Antes de realizar tu primera inversión necesitamos conocer un poco más de ti. Completa tu registro y empieza a invertir ahora
                  </Typography>
                
                </Grid>
                <Grid item xs={4}>
                  <div className='text-right padding-btn'>
                    <Button className='button-secondary-outline fw-600'>Completar registro</Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
      </Container>
    </div>
  </>;
}

export default NewUser;
