import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import RecurringStyled from './Recurring.module.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Productgraph from '../../components/productgraph/Productgraph';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Recurringitems from '../../components/UI/Recurring-items'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
const options = [
  'Ver detalle',
  'Invertir más',
  'Rescatar',
];

const ITEM_HEIGHT = 48;

function Recurringdash() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={RecurringStyled.top_banner}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid style={{ paddingLeft: "0px" }} item xs={12}>
              <div
                style={{ justifyContent: "start" }}
                className={RecurringStyled.heading}
              >
                <img src="/assets/images/product_rect.png" alt="d"></img>
                <Typography
                  className="font-lg-28 museo-regular"
                >
                  Mi inversión Xcala
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container  className={RecurringStyled.top_bar}>
            <Grid className={RecurringStyled.investments} item xs={12} md={4}>
              <Typography style={{ textTransform: "uppercase", color: "#182849" }}
                className="font-lg-18"
              >
                TIENES
              </Typography>
              <div className={RecurringStyled.currency}>
                <Typography
                  className={RecurringStyled.currency_}
                >
                  $ 11.200.000
                </Typography>
              </div>
            </Grid>
            <Grid className={RecurringStyled.investments} item xs={12} md={4}>
              <Typography style={{ textTransform: "uppercase", color: "#182849" }}
                className="font-lg-18"
              >
                HAS DEPOSITADO
              </Typography>
              <div className={RecurringStyled.currency}>
                <Typography
                  className={RecurringStyled.currency_}
                >
                  $ 10.000.000
                </Typography>
              </div>
            </Grid>
            <Grid style={{ border: "none" }} className={RecurringStyled.investments} item xs={12} md={4}>
              <Typography style={{ textTransform: "uppercase", color: "#182849" }}
                className="font-lg-18"
              >
                HAS GANADO <span style={{ color: "#35978C" }}>(+12,00%)</span>
              </Typography>
              <div className={RecurringStyled.currency}>
                <Typography
                  className={RecurringStyled.currency_}
                >
                  $ 11.200.000
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {/* 1sd column */}
            <Grid item xs={12} md={6} >
              <div className={RecurringStyled.center}>
                <Card className={RecurringStyled.cardstyle} sx={{ borderRadius: 4 }}>
                  <CardContent>
                    <Grid maxWidth="sm" >
                      <Grid item md={12} mb={3}>
                        <div className={RecurringStyled.card_h1}>
                          <img src="/assets/images/Iconos-Perfiles.svg" alt=""></img>
                          <Typography style={{ marginRight: "auto" }} className={RecurringStyled.h1} variant="" component="">
                            Xcala Balanceado Global
                          </Typography>
                          {/* Threedotbutton */}
                          <div>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? 'long-menu' : undefined}
                              aria-expanded={open ? 'true' : undefined}
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                'aria-labelledby': 'long-button',
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: '130px',
                                },
                              }}
                            >
                              {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                  {option}
                                </MenuItem>
                              ))}
                            </Menu>
                          </div>

                          {/* end threedot btn*/}

                        </div>
                        <div className={RecurringStyled.link}>
                          <Link className={RecurringStyled.link1} to="">Para generar ingresos</Link>
                          <Link className={RecurringStyled.link2} to="">Medioambiente</Link>
                        </div>
                        <Grid mt={3} container>
                          <Grid className={RecurringStyled.columnborder} item xs={12} md={6}>
                            <Typography style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                              className="font-lg-14"
                            >
                              TIENES
                            </Typography>
                            <div className={RecurringStyled.usd}>
                              <Typography
                                className="font-lg-28 fw-600"
                              >
                                USD$ 9.259,25
                              </Typography>
                            </div>
                            <div>
                              <Typography>
                                $ 7.500.000*
                              </Typography>
                            </div>
                          </Grid>
                          <Grid className={RecurringStyled.second_column} item xs={12} md={6}>
                            <Typography style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                              className="font-lg-14"
                            >
                              has ganado <span style={{ color: "#49a197" }}>(+20,93%)</span>
                            </Typography>
                            <div style={{ lineHeight: "39px" }} className={RecurringStyled.usd}>
                              <Typography
                                className="font-lg-20 fw-600"
                              >
                                USD$ 9.259,25
                              </Typography>
                              <div>
                              <Typography >
                                $ 4.777,07*
                              </Typography>
                            </div>
                            </div>
                           
                          </Grid>
                          <div className={RecurringStyled.fadetext}>
                            <Typography
                              className={RecurringStyled.text}
                            >
                              *Tipo de cambio al 30/10/21 = $810 (Banco Central)
                            </Typography>
                          </div>
                        </Grid>

                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            {/* 2nd column */}
            <Grid item xs={12} md={6}>
              <div className={RecurringStyled.center}>
                <Card className={RecurringStyled.cardstyle} sx={{ borderRadius: 4 }}>
                  <CardContent>
                    <Grid item md={12} mb={3}>
                      <div className={RecurringStyled.card_h1}>
                        <img src="/assets/images/Iconos-Perfiles.svg" alt=""></img>
                        <Typography style={{ marginRight: "auto" }} className={RecurringStyled.h1} variant="" component="">
                          Xcala Balanceado Global
                        </Typography>
                        {/* three dot btn */}
                        <div>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '130px',
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>
                        {/* end three dot btn */}
                      </div>

                      <div className={RecurringStyled.link}>
                        <Link style={{ backgroundColor: "#DEE5F2", color: "#182849" }} className={RecurringStyled.link1} to="">Para generar ingresos</Link>
                        <Link style={{ backgroundColor: "#E8D8EC", color: "#6E2B7F" }} className={RecurringStyled.link2} to="">Ciencia</Link>
                      </div>
                      <Grid mt={3} container spacing={2}>
                        <Grid className={RecurringStyled.columnborder} item xs={12} md={6}>
                          <Typography style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                            className="font-lg-14"
                          >
                            TIENES
                          </Typography>
                          <div className={RecurringStyled.usd}>
                            <Typography style={{ fontWeight: "bold" }}
                              className="font-lg-28"
                            >
                              $ 3.700.000
                            </Typography>
                          </div>
                        </Grid>
                        <Grid className={RecurringStyled.second_column} item xs={12} md={6}>
                          <Typography style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                            className="font-lg-14"
                          >
                            has ganado <span style={{ color: "#D12D35" }}>(-10,05%)</span>
                          </Typography>
                          <div style={{ lineHeight: "39px" }} className={RecurringStyled.usd}>
                            <Typography
                              className="font-lg-20 fw-600"
                            >
                              -$ 370.000
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>

                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            {/* end 2nd column */}
          </Grid>
        </Container>
      </div >
      <div className={RecurringStyled.fundpurpose}>
        <Container maxWidth="lg">
          <Grid item md={12} xs={12} mb={3}>
            <div className={RecurringStyled.page_wrapper}>
              <div className={RecurringStyled.heading}>
                <img src="/assets/images/product_rect.png" alt="d"></img>
                <Typography className={RecurringStyled.h2} variant="" component="">
                  Te proponemos estos fondos <span style={{ color: "#1E22AA" }}>para ti </span>
                </Typography>
              </div>
              <div className={RecurringStyled.p}>
                <Typography
                  className={RecurringStyled.fadetext}
                >
                  Invierte tranquila... Podrás invertir desde $10 mil y sacar tu
                  plata cuando la necesites.
                </Typography>
              </div>
            </div>
          </Grid>
          <div className={RecurringStyled.filter}>
            <Typography
              className={RecurringStyled.text}
              style={{ fontSize: "14px", color: "#808080" }}
            >
              Actualizado 16/12/2021 - 14:27
            </Typography>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Productgraph />
            </Grid>
            <Grid item xs={12} md={6}>
              <Productgraph />
            </Grid>
          </Grid>
          <Grid className={RecurringStyled.green_btn} item xs={12}>

            <Link to="/products" style={{ color: "#49A197", textDecoration: "none" }}>
              <Button variant="outlined" className='button-secondary-outline'>
                Ver más opciones de inversión
              </Button>
            </Link>
          </Grid>
        </Container>

        <div className={RecurringStyled.Discover_section}>
          <Container maxWidth="lg">
            <Grid item md={12} mb={3}>
              <div className={RecurringStyled.page_wrapper}>
                <div className={RecurringStyled.heading}>
                  <img src="/assets/images/product_rect.png" alt="d"></img>
                  <Typography className={RecurringStyled.h2}>
                    Descubre más Xcala
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid container className='dashboad-accordion'>
              <Grid className={RecurringStyled.Investcolumn} item xs={12} md={4}>
                <Accordion style={{ boxShadow: "none" }} defaultExpanded>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={RecurringStyled.Invest}>
                      <img height={"auto"} src="/assets/images/recurring-invest1.svg" alt="" />

                      <div className={RecurringStyled.heading}>
                        <Typography style={{ color: "#1E22AA" }} className="font-lg-24 fw-600">
                          Invierte según tus motivaciones
                        </Typography>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>

                    <Recurringitems title="Hacer crecer mi plata" />
                    <Recurringitems title="Ganar con próposito e impacto" />
                    <Recurringitems title="Generar un ingreso mensual extra" />
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid className={RecurringStyled.Investcolumn} item xs={12} md={4}>
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={RecurringStyled.Invest}>
                      <img src="/assets/images/recurring-invest2.svg" alt="" />
                      <div className={RecurringStyled.heading}>
                        <Typography style={{ color: "#1E22AA" }} className="font-lg-24 fw-600">
                          Invierte según tus áreas de interés
                        </Typography>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>

                    <Recurringitems title="Comprarte un auto" />
                    <Recurringitems title="Mejorar tu jubilación" />
                    <Recurringitems title="Las vacaciones soñadas" />
                    <Recurringitems title="Comprarte tu casa" />
                    <Recurringitems title="Ganar con próposito e impacto" />
                    <Recurringitems title="Ahorrar para imprevistos" />
                    <Recurringitems title=" Otro" />
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid className={RecurringStyled.Investcolumn} item xs={12} md={4}>
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={RecurringStyled.Invest}>
                      <img src="/assets/images/recurring-invest3.svg" alt="" />
                      <div className={RecurringStyled.heading}>
                        <Typography style={{ color: "#1E22AA" }} className="font-lg-24 fw-600">
                          Invierte de acuerdo a objetivos
                        </Typography>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>

                    <Recurringitems title="Tecnología" />
                    <Recurringitems title="Medio Ambiente" />
                    <Recurringitems title="Cultura" />
                    <Recurringitems title="Economía" />
                    <Recurringitems title="Ciencia" />
                  </AccordionDetails>
                </Accordion>
              </Grid>


            </Grid>

            <Grid item md={12} mt={4} className="desktop-hide" >
              <div className="formbutton">
                <Button className='light-button-primary'> Ver todas las opciones de inversión</Button>
              </div>
            </Grid>

          </Container>

        </div>
      </div>

    </div >
  );
}

export default Recurringdash;
