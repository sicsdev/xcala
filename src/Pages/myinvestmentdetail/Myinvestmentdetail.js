import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import MyinvestmentStyled from './Myinvestmentdetail.module.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Productgraph from '../../components/productgraph/Productgraph';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Recurringitems from '../../components/UI/Recurring-items'
import { Link } from 'react-router-dom';
import Charts from '../../components/productgraph/Chart';
import Productdetailconditions from '../../components/productgraph/Productdetailconditions';
import Myinvestmentsummary from '../../components/Myinvestment-detail/Myinvestment-summary';
import StickyHeadTable from '../../components/Myinvestment-detail/Investment-table';


function Myinvestmentdetail() {
  return (
  <>
    <div className={MyinvestmentStyled.top_banner}>
      <Container maxWidth="lg">
                <Grid style={{ paddingLeft: "0px" }} item xs={12}>
                        <div
                            style={{ justifyContent: "start" }}
                            className={MyinvestmentStyled.heading}
                        >
                            <img src="/assets/images/product_rect.png" alt=""></img>
                            <Typography
                            className="font-lg-28 museo-regular"
                            variant=""
                            component=""
                            >
                            Detalle de mi inversión
                            </Typography>
                        </div>
                </Grid>

{/* row */}
    <Grid container spacing={4}>
        <Grid item xs={12}>
            <div className={MyinvestmentStyled.cardstyle}>
                  <Grid container spacing={2}>    
                        <Grid item xs={6}>
                        <div className={MyinvestmentStyled.card_h1}>
                            <img src="/assets/images/Iconos-Perfiles.svg"></img>
                            <Typography className={MyinvestmentStyled.h1} variant="" component="">
                            Xcala Renta Global Pesos
                            </Typography>
                        </div>
                        <div className={MyinvestmentStyled.link}>
                            <Link style={{backgroundColor:"#DEE5F2",color:"#182849"}} className={MyinvestmentStyled.link1} to="">Para hacer crecer tu plata</Link>
                            <Link style={{backgroundColor:"#E8D8EC",color:"#6E2B7F"}} className={MyinvestmentStyled.link2} to="">Ciencia</Link>
                        </div>
                        </Grid>

                        <Grid container xs={6}>
                            <Grid className="formbutton" item md={12}>
                                <Link to="" className={MyinvestmentStyled.green_btn} style={{color:"#49A197",textDecoration:"none"}}>
                                    <Button variant="outlined">
                                    <img style={{marginRight:"15px"}} src="/assets/images/payments.svg"></img>Rescatar fondos
                                    </Button>
                                </Link>    
                                <Link to="">
                                    <Button style={{textTransform:"none"}} className="button-primary">
                                    <img style={{marginRight:"15px"}} src="/assets/images/trending_up.svg"></img> Invertir más
                                    </Button> 
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>    
            </div>
          </Grid>
    </Grid>      
{/* end row*/}
</Container>
    </div>  

<div className={MyinvestmentStyled.grey_section}>
    <Container maxWidth="lg">
        <Grid className={MyinvestmentStyled.summary} container>
          <Grid pr={3} item xs={5}>
            <div style={{ marginBottom: "2rem" }}>
              <Typography
                style={{ fontSize: "24px", fontWeight: "600" }}
                className="p-18"
              >
                Resumen
                <Myinvestmentsummary />
              </Typography>
            </div>
            
          </Grid>
          <Grid pl={3} item xs={7}>
          <div style={{ marginBottom: "2rem" }}>
              <Typography
                style={{ fontSize: "24px", fontWeight: "600" }}
                className="p-18"
              >
                Evolución del fondo
              </Typography>
            </div>
          <Charts productdetail={"productdetail"} />
          </Grid>
        </Grid>   
    </Container>  

{/* Table */}
    <Container maxWidth="lg">
        <div className={MyinvestmentStyled.summary}>
        <Grid pr={3} item xs={5}>
                <div style={{ marginBottom: "2rem" }}>
                <Typography
                    style={{ fontSize: "24px", fontWeight: "600" }}
                    className="p-18"
                >
                    Cartola de movimientos
                </Typography>
                </div>
                
        </Grid>
            <StickyHeadTable /></div>
    </Container>


    {/* Bluebox */}
    <Container maxWidth="lg">
        <div className={MyinvestmentStyled.bluebox}>
                <Grid mb={2} style={{display:"flex"}} item xs={12}>
                            <img style={{marginRight:"12px"}} src="/assets/images/settings.svg" alt=""></img>
                            <Typography style={{fontWeight:"600"}} className="font-lg-24">
                                Pago de dividendos
                            </Typography>
                </Grid>
                            <Typography className="font-lg-18">
                            Este fondo genera dividendos mensuales que acualmente son depositados en tu cuenta corriente Nº 1111111111111 del Banco de Chile.
                            </Typography>

         <Grid container spacing={2}>
             <Grid mb={2} style={{display:"flex"}} item xs={6}>
                    <div className={MyinvestmentStyled.invest_list}>
                    <img src="/assets/images/green_rightarrow.svg" alt=""></img>
                        <Typography className={MyinvestmentStyled.list_item}>
                        Prefiero reinvertir en este fondo
                        </Typography>
                    </div>
                    </Grid>
                    <Grid mb={2} style={{display:"flex"}} item xs={6}>
                    <div className={MyinvestmentStyled.invest_list}>
                    <img src="/assets/images/green_rightarrow.svg" alt=""></img>
                        <Typography className={MyinvestmentStyled.list_item}>
                        Cambiar cuenta de depósito
                        </Typography>
                    </div>
                    </Grid>
                    </Grid>

        </div>
    </Container>    
</div>    
</>
  );
}

export default Myinvestmentdetail;
