import React from 'react';
import { Grid } from '@mui/material';
import simulatorresultstyle from './Simulator-result.module.scss'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Simulatorresult() {
        return (
                <>
                        <Grid container className={simulatorresultstyle.simulate_resultbox} bgcolor={"#fff"}>
                                <Grid item xs={12} md={12}>
                                        <div className={simulatorresultstyle.heading}>
                                                <Typography style={{ textTransform: "uppercase" }} className="font-lg-14">
                                                        Resultado de tu simulación
                                                </Typography>
                                                <Typography style={{ color: "#1e22aa" }} className="font-lg-18">
                                                        Si inviertes <b>$ 5.000.000</b> en<b> 2 años </b>
                                                </Typography>
                                        </div>
                                </Grid>


                                <div className={simulatorresultstyle.green_box} >
                                        <Grid item xs={12} md={12}>
                                                <Typography className={simulatorresultstyle.greendata_text}>
                                                        escenario optimista
                                                </Typography>
                                        </Grid>
                                        <Grid className={simulatorresultstyle.greendata_whitebox} container>
                                                <Grid item xs={12} md={6} className={simulatorresultstyle.textLeft}>
                                                        <Typography>
                                                                Saldo en 24 meses
                                                        </Typography>
                                                        <Typography className='fw-600'>
                                                                <span>  USD$ 6.600 / </span> $ 5.346.000*
                                                        </Typography>

                                                </Grid>
                                                <Grid item xs={12} md={6} className={simulatorresultstyle.textRight}>
                                                        <Typography className='light-grey'>
                                                                Ganado <span style={{ color: "#347856" }}>(+20%)</span>
                                                        </Typography>
                                                        <Typography className='fw-600 light-grey'>
                                                                <span> USD$ </span>  427,17 / $ 346.000
                                                        </Typography>
                                                </Grid>
                                        </Grid>
                                </div>

                                <div className={simulatorresultstyle.blue_box}>
                                        <Grid item xs={12} md={12}>
                                                <Typography className={simulatorresultstyle.bluedata_text}>
                                                        escenario normal
                                                </Typography>
                                        </Grid>
                                        <Grid className={simulatorresultstyle.bluedata_whitebox} container>
                                                <Grid item xs={12} md={6} className={simulatorresultstyle.textLeft}>
                                                        <Typography>
                                                                Saldo en 24 meses
                                                        </Typography>
                                                        <Typography className='fw-600'>
                                                                $ 5.500.000
                                                        </Typography>

                                                </Grid>
                                                <Grid item xs={12} md={6} className={simulatorresultstyle.textRight}>
                                                        <Typography className='light-grey'>
                                                                Ganado <span style={{ color: "#347856" }}>(+20%)</span>
                                                        </Typography>
                                                        <Typography className='fw-600 light-grey'>
                                                                <span> USD$ 427,17 /</span>         $ 346.000
                                                        </Typography>
                                                </Grid>
                                        </Grid>
                                </div>

                                <div className={simulatorresultstyle.yellow_box}>
                                        <Grid item xs={12} md={12}>
                                                <Typography className={simulatorresultstyle.yellowdata_text}>
                                                        escenario pesimista
                                                </Typography>
                                        </Grid>
                                        <Grid className={simulatorresultstyle.yellowdata_whitebox} container>
                                                <Grid item xs={12} md={6} className={simulatorresultstyle.textLeft}>
                                                        <Typography>
                                                                Saldo en 24 meses
                                                        </Typography>
                                                        <Typography className='fw-600'>
                                                                <span>USD$ 6.600 /</span>      $ 5.346.000*
                                                        </Typography>

                                                </Grid>
                                                <Grid item xs={12} md={6} className={simulatorresultstyle.textRight}>
                                                        <Typography className='light-grey'>
                                                                Ganado <span style={{ color: "#347856" }}>(+20%)</span>
                                                        </Typography>
                                                        <Typography className='fw-600 light-grey'>
                                                                <span>  USD$ 427,17 /</span>   $ 346.000
                                                        </Typography>
                                                </Grid>
                                        </Grid>
                                </div>

                                <div className={simulatorresultstyle.warning}>
                                        <img src="/assets/images/warning.svg" alt=""></img>
                                        <Typography className={simulatorresultstyle.warning_text}>
                                                Importante
                                        </Typography>
                                </div>
                                <ul className={simulatorresultstyle.warning_list}>
                                        <li>El resultado de esta simulación corresponde a escenarios proyectados y no representan un compromiso de rentabilidad por parte de Xcala.</li>
                                        <li>Rentabilidades pasadas no garantizan rentabilidades futuras. El valor y rendimiento de sus inversiones pueden tanto bajar como subir.</li>
                                </ul>
                                <Link to="" className={simulatorresultstyle.green_text}>
                                        ¿Cómo calculamos la rentabilidad?
                                </Link>

                                <Grid container spacing={2} style={{ alignItems: "center" }} mt={3}>
                                        <Grid item md={6} xs={12} className="mobile-hide text-center">
                                                <Button className="button-secondary-outline">
                                                        Ver otros fondos
                                                </Button>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                                <Button className="button-primary">
                                                        Solicitar inversión
                                                </Button>
                                        </Grid>
                                </Grid>
                        </Grid>
                        <Grid mt={4} container className="desktop-hide fund-btn " spacing={5}>
                                <Grid item xs={12} className={simulatorresultstyle.mobile_btn}>
                                        <Button className="button-secondary-outline">
                                                Ver otros fondos
                                        </Button>
                                </Grid>
                        </Grid>
                </>
        );
}

export default Simulatorresult;
