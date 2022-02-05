import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import Styled from "../received-request/Received-Request.module.scss"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
function ReceivedRequest() {
  return <>
    <div className={Styled.received_request}>
      <Container sx={{ maxWidth: "677px!important" }}>
        <div className={Styled.success_tick}>
          <img src="/assets/images/sucess-gif.gif" alt="success"></img>
          <div className={Styled.success_messg} >
            <Typography className='dark-green fw-600 font-lg-24'>
              ¡Hemos recibido tu solicitud!
            </Typography>
          </div>
        </div>
        <div className={Styled.registration_wrapper}>
          <Grid container spacing={2} className={Styled.registration_first_step}>
            <div className={Styled.rectangle_heading}>
              <Grid item md={12} mb={3}>
                <Typography className='font-lg-14'>
                  Fondo
                </Typography>
                <Typography >
                  Xcala Deuda Privada Global
                </Typography>


                <Typography mt={2} className='blue_text'>
                  Monto de inversión
                </Typography>
                <Typography className='font-lg-18 fw-600 blue_text'>
                  USD$ 6.600 / $ 5.346.000*
                </Typography>
                <Typography className='light-grey'>
                  *Tipo de cambio al 30/10/21 = $810
                </Typography>
              </Grid>
            </div>
            <Grid item md={12} mb={3}>
              <Typography mt={4} className='font-lg-18 blue_text fw-600'>
                Sólo Falta que realices la transferencia de $ 5.000.000 a:
              </Typography>
            </Grid>
            {/* Bank Detail */}
            <div className={Styled.bank_detail}>
              <Grid item md={6} mt={3} >
                <Typography mt={2} >
                  Banco:
                </Typography>

              </Grid>
              <Grid item md={6} mt={3} >
                <Typography mt={2} className='font-lg-18 fw-600 text-right'>
                  Banco Santander
                </Typography>
              </Grid>
            </div>
            <div className={Styled.bank_detail}>
              <Grid item md={6} mt={3} >
                <Typography mt={2} >
                  N° de Cuenta
                </Typography>

              </Grid>
              <Grid item md={6} mt={3} >
                <Typography mt={2} className='font-lg-18 fw-600 text-right'>
                  2222222222222222
                </Typography>
              </Grid>
            </div>
            <div className={Styled.bank_detail}>
              <Grid item md={6} mt={3} >
                <Typography mt={2} >
                  Razón social
                </Typography>

              </Grid>
              <Grid item md={6} mt={3} >
                <Typography mt={2} className='font-lg-18 fw-600 text-right'>
                  Inversiones Xcala S.R.L
                </Typography>
              </Grid>
            </div>
            <div className={Styled.bank_detail}>
              <Grid item md={6} mt={3} >
                <Typography mt={2} >
                  Email:
                </Typography>

              </Grid>
              <Grid item md={6} mt={3} >
                <Typography mt={2} className='font-lg-18 fw-600 text-right'>
                  transferencias@xcala.cl
                </Typography>
              </Grid>
            </div>
            <Grid item md={12} mt={3} >
              <div className={Styled.copy_btn}>
                <Button className="light-button-primary"><ContentCopyIcon />Copiar datos bancarios para transferir</Button>
              </div>
            </Grid>
            <Grid item md={12} mt={3} >
              <div className={Styled.warning}>
                <img src="/assets/images/warning.svg" alt=""></img>
                <Typography className={Styled.warning_text}>
                  Importante
                </Typography>
              </div>
              <Typography mt={3}>
                Procesaremos tu solicitud una vez que hayamos recibido el monto de tu inversión y podría tardar un máximo de  XX horas en verse reflejada en tu dashboard.
              </Typography>
            </Grid>
            <Grid item md={12} mt={3} >
              <div className={Styled.downlaod}>
                <DownloadIcon />
                <div className={Styled.downlaod_text}>
                  <Typography className="dark-green fw-600">
                    Descargar comprobante de solicitud
                  </Typography>
                  <Typography>
                    Llegará a tu correo de todas formas
                  </Typography>
                </div>
              </div>
            </Grid>

          </Grid>
        </div>
        <Grid container spacing={2}>
          <Grid item md={12} mt={3}>
            <div className={Styled.continue_btn}>
              <Link to="/recurring-dash" className="button-primary" >Volver al Inicio</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div >
  </>
}

export default ReceivedRequest;
