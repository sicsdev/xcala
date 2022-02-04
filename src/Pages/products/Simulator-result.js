import React from 'react';
import { Grid } from '@mui/material';
import simulatorresultstyle from './Simulator-result.module.scss'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Simulatorresult() {
  return (
  <div>
        <Grid className={simulatorresultstyle.simulate_resultbox} container bgcolor={"#fff"}>
        <Grid>
            <Grid item xs={12}>
                <div className={simulatorresultstyle.heading}>
                    <Typography style={{textTransform:"uppercase"}} className="p-14" variant="" component="">
                    Resultado de tu simulación
                    </Typography>
                    <Typography style={{color:"#1e22aa"}} className="p-18" variant="" component="">
                    Si inviertes <b>$ 5.000.000</b> en<b> 2 años </b>
                    </Typography>
                </div>
            </Grid>  

            <Grid className={simulatorresultstyle.green_box} container spacing={2}>
                <Grid style={{paddingLeft:"0px"}} item xs={12}>
                <Typography className={simulatorresultstyle.greendata_text} variant="" component="">
                 escenario optimista
                </Typography>
                </Grid>
             <Grid className={simulatorresultstyle.greendata_whitebox} container spacing={2}>    
                <div item xs={6}>
                        <Typography className="p-16" variant="" component="">
                        Saldo en 24 meses
                        </Typography>
                        <div className="p-16" variant="" component="">
                        <b>USD$ 6.600 / $ 5.346.000*</b>
                        </div>
                </div>
                <div style={{textAlign:"right"}} item xs={6}>
                        <Typography  style={{color:"#808080"}} className="p-16" variant="" component="">
                        Ganado <span style={{color:"#347856"}}>(+20%)</span>
                        </Typography>
                        <div  style={{color:"#808080"}} className="p-16" variant="" component="">
                        <b>USD$ 427,17 / $ 346.000</b>
                        </div>
                </div> 
            </Grid>   
            </Grid>    

            <Grid className={simulatorresultstyle.blue_box} container spacing={2}>
                <Grid style={{paddingLeft:"0px"}} item xs={12}>
                <Typography className={simulatorresultstyle.bluedata_text} variant="" component="">
                escenario normal
                </Typography>
                </Grid>
             <Grid className={simulatorresultstyle.bluedata_whitebox} container spacing={2}>    
                <div item xs={6}>
                        <Typography className="p-16" variant="" component="">
                        Saldo en 24 meses
                        </Typography>
                        <div className="p-16" variant="" component="">
                        <b>USD$ 6.600 / $ 5.346.000*</b>
                        </div>
                </div>
                <div style={{textAlign:"right"}} item xs={6}>
                        <Typography  style={{color:"#808080"}} className="p-16" variant="" component="">
                        Ganado <span style={{color:"#347856"}}>(+20%)</span>
                        </Typography>
                        <div  style={{color:"#808080"}} className="p-16" variant="" component="">
                        <b>USD$ 427,17 / $ 346.000</b>
                        </div>
                </div> 
            </Grid>   
            </Grid>    

            <Grid className={simulatorresultstyle.yellow_box} container spacing={2}>
                <Grid style={{paddingLeft:"0px"}} item xs={12}>
                <Typography className={simulatorresultstyle.yellowdata_text} variant="" component="">
                escenario pesimista
                </Typography>
                </Grid>
             <Grid className={simulatorresultstyle.yellowdata_whitebox} container spacing={2}>    
                <div item xs={6}>
                        <Typography className="p-16" variant="" component="">
                        Saldo en 24 meses
                        </Typography>
                        <div className="p-16" variant="" component="">
                        <b>USD$ 6.600 / $ 5.346.000*</b>
                        </div>
                </div>
                <div style={{textAlign:"right"}} item xs={6}>
                        <Typography  style={{color:"#808080"}} className="p-16" variant="" component="">
                        Ganado <span style={{color:"#347856"}}>(+20%)</span>
                        </Typography>
                        <div  style={{color:"#808080"}} className="p-16" variant="" component="">
                        <b>USD$ 427,17 / $ 346.000</b>
                        </div>
                </div> 
            </Grid>  
            </Grid>                            
            <div className={simulatorresultstyle.text}>
                            <Typography className={simulatorresultstyle.fadetext} variant="" component="">
                            *Tipo de cambio al 30/10/21 = $810
                            </Typography>
           </div>
           <div className={simulatorresultstyle.warning}>
                  <img src="/assets/images/warning.svg" alt=""></img>
                  <Typography className={simulatorresultstyle.warning_text} variant="" component="">
                    Importante
                  </Typography>
           </div>
           <ul className={simulatorresultstyle.warning_list}>
                <li>El resultado de esta simulación corresponde a escenarios proyectados y no representan un compromiso de rentabilidad por parte de Xcala.</li>
                <li>Rentabilidades pasadas no garantizan rentabilidades futuras. El valor y rendimiento de sus inversiones pueden tanto bajar como subir.</li>
           </ul>
           <Link to="" className={simulatorresultstyle.green_text} variant="" component="">
                ¿Cómo calculamos la rentabilidad?
           </Link>

           <Grid container className="formbutton" spacing={2}>
                <Grid item xs={6}>
                   <Button variant="outlined" className={simulatorresultstyle.green_btn}>
                   Ver otros fondos
                   </Button> 
                </Grid>
                <Grid item xs={6}>
                   <Button className="button-primary">
                   Solicitar inversión
                   </Button> 
                </Grid>
           </Grid>

         </Grid>     
        </Grid>

  </div>
  );
}

export default Simulatorresult;
