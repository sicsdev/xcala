import { Container, Grid, Switch, Typography } from '@mui/material';
import React from 'react';
import Styled from "../configure-notifcation/Configure-Notification.module.scss"
function ConfigureNotification() {
  return <>
    <div className='page_content pt-lg-45'>
      <div className={Styled.configure_notification_main}>
        <Container sx={{ maxWidth: "676px!important" }}>
          <Typography className='museo-regular font-lg-24'
          >
            <img src="/assets/images/Rectangle.png" alt=""></img>  Configurar notificaciones
          </Typography>
          <div className={Styled.configure_notification_wrapper}>
            <Grid container spacing={2} className={Styled.configure_notification_step}>
              <Grid item md={12} xs={12} mb={3}>
                <div className={Styled.configure_notification}>
                  <Typography>
                    Depósito recibido por Xcala
                  </Typography>
                  <Switch defaultChecked />
                </div>
                <div className={Styled.configure_notification}>
                  <Typography>
                    Pago de retiros
                  </Typography>
                  <Switch />
                </div>
                <div className={Styled.configure_notification}>
                  <Typography>
                    Recomendaciones
                  </Typography>
                  <Switch defaultChecked />
                </div>
                <div className={Styled.configure_notification}>
                  <Typography>
                    Pago de dividendos
                  </Typography>
                  <Switch />
                </div>
                <div className={Styled.configure_notification}>
                  <Typography>
                    Nuevos productos
                  </Typography>
                  <Switch defaultChecked  />
                </div>
                <div className={Styled.configure_notification}>
                  <Typography>
                    Novedades
                  </Typography>
                  <Switch />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div >
  </>
}

export default ConfigureNotification;
