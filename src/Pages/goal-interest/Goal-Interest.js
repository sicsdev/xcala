import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Styled from '../goal-interest/Goal-Interest.module.scss'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Grid, Typography } from "@mui/material";
import TodayIcon from '@mui/icons-material/Today';
import InsightsIcon from '@mui/icons-material/Insights';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function GoalInterest() {
  return (
    <div className="page_content pt-lg-45">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={12} mb={3}>
            <Typography className='museo-regular font-lg-24'  >
              <img src="/assets/images/Rectangle.png" alt=""></img>&nbsp;    Mi perfil de riesgo
            </Typography>
          </Grid>
          <Grid item md={12} mb={3}>
            <div className={Styled.Interest_main}>
              {/* First Accordion */}
              <Accordion style={{ boxShadow: "none" }} defaultExpanded>
                <AccordionSummary
                  style={{ padding: "0px" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{ fontWeight: "600" }}
                    className='blue_text fw-600 font-lg-24'
                  >
                    Mis motivaciones
                  </Typography>

                </AccordionSummary>
                <AccordionDetails>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <TodayIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Hacer crecer mi plata
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <InsightsIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Ganar con próposito e impacto
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <LocalFloristIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Generar un ingreso mensual extra
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                </AccordionDetails>
              </Accordion>
              {/* Second Accordion */}
              <Accordion style={{ boxShadow: "none" }}>
                <AccordionSummary
                  style={{ padding: "0px" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{ fontWeight: "600" }}
                    className='blue_text fw-600 font-lg-24'
                  >
                    Mis interereses
                  </Typography>

                </AccordionSummary>
                <AccordionDetails>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <DirectionsCarFilledIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Comprar tu auto
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <AccountBalanceIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Comprar tu casa
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <DirectionsWalkIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Mejorar tu jubilación
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <MonetizationOnOutlinedIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Ahorrar para imprevistos
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <BeachAccessIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Las vacaciones soñadas
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <HelpOutlineOutlinedIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Otro
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                </AccordionDetails>
              </Accordion>

              {/* Third Accordion */}
              <Accordion style={{ boxShadow: "none" }}>
                <AccordionSummary
                  style={{ padding: "0px" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{ fontWeight: "600" }}
                    className='blue_text fw-600 font-lg-24'
                  >
                    Mis objetivos
                  </Typography>

                </AccordionSummary>
                <AccordionDetails>
                  <div className={Styled.accordion_content}>
                    <div className={Styled.accordion_content_text}>
                      <TodayIcon className='dark-green' />
                      <Typography
                        style={{ fontWeight: "600" }}
                        className='fw-600 font-lg-18'
                      >
                        Hacer crecer mi plata
                      </Typography>
                    </div>
                    <Checkbox />
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default GoalInterest;
