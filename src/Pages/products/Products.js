import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import productstyles from "./Products.module.scss";
import { Container } from "@mui/material";
import Productgraph from "../../components/productgraph/Productgraph";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Productslider from "../../components/productgraph/Productslider";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
function Products() {
  const [showdata, setProductdatahide] = useState(false);
  const [showResponsivefilter, setResponsivefilter] = useState();
  const onClick = () => setProductdatahide(true);
  const showFilterMobile = () => {
    setResponsivefilter(prevState => !prevState);
  }
  const handleCloseUserMenu = () => {
    setResponsivefilter((prevState => !prevState))
  };
  return (
    <div className={productstyles.product_wrapper}>
      <Container maxWidth="lg">
        <Grid item md={12} xs={12} mb={3}>
          <div className={productstyles.page_wrapper}>
            <div className={productstyles.heading}>
              <Typography className={productstyles.h2} >
                <img src="/assets/images/product_rect.png" alt=""></img> &nbsp;
                Nuestros fondos
              </Typography>
              <Typography className={productstyles.filter_responsive} onClick={showFilterMobile} >
                <FilterAltIcon /> Filtrar
              </Typography>
            </div>
            <div className={productstyles.p}>
              <Typography
                className={productstyles.fadetext}
              >
                Invierte tranquila... Podrás invertir desde $10 mil y sacar tu
                plata cuando la necesites.
              </Typography>
            </div>
          </div>
        </Grid>

        {/* filter */}
        {showdata === false ? (
          <div className="hide">
            <div className={productstyles.filter}>
              <Typography
                className={productstyles.filter_text}
              >
                Filtros
              </Typography>
              <div
                className="Static font-lg-14 light-grey"
              >
                Actualizado 16/12/2021 - 14:27
              </div>
            </div>

            <Grid container spacing={5}>
              <Grid item md={4} xs={12} className={!showResponsivefilter ? `product-filter-accordion ${productstyles.responsive_filter}` : `product-filter-accordion show-filter-responsive ${productstyles.responsive_filter}`} >
                <div className={productstyles.mobile_heading}>
                  <Typography className='museo-regular font-lg-24 blue_text'>
                    Filtros
                  </Typography>
                  <Typography >
                    <CloseIcon className='blue_text' onClick={handleCloseUserMenu} />
                  </Typography>
                </div>
                {/* Accordion-1 */}
                <Accordion style={{ boxShadow: "none", marginTop: "1rem" }} defaultExpanded={true}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                  >
                    <Typography
                      className="p-18"
                      variant=""
                      component=""
                      style={{ fontWeight: "600" }}
                    >
                      Perfil de inversión
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Muy conservador"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Conservador"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Moderado"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Agresivo"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Muy Agresivo"
                        />
                      </FormGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* Accordion-2 */}

                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className="p-18"
                      variant=""
                      component=""
                      style={{ fontWeight: "600" }}
                    >
                      Motivaciones
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Hacer crecer mi plata"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Ganar con próposito e impacto"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Generar un ingreso mensual extra"
                        />
                      </FormGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* Accordion-3 */}
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className="p-18"
                      variant=""
                      component=""
                      style={{ fontWeight: "600" }}
                    >
                      Objetivos
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Comprar un auto"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Mejorar tu jubilación"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Las vacaciones soñadas"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Comprar tu casa"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Ahorrar para imprevistos"
                        />
                        <FormControlLabel control={<Checkbox />} label="Otro" />
                      </FormGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* Accordion-4 */}
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className="p-18"
                      variant=""
                      component=""
                      style={{ fontWeight: "600" }}
                    >
                      Intereses
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Tecnología"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Medio ambiente"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Cultura"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Economía"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Ciencia"
                        />
                      </FormGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={8} xs={12}>
                <Grid container spacing={3}  >
                  <Grid item md={6} xs={12}>
                    <Productgraph />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Productgraph />
                  </Grid>
                  <Grid style={{ marginLeft: "auto" }} container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <Productgraph />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Productgraph />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid className={productstyles.showmorebtn} item md={12} xs={12}>
                  <Button
                    onClick={onClick}
                    className={productstyles.btn}
                    variant="outlined"
                  >
                    Mostrar más
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <Productslider />
        )}
      </Container>
    </div>
  );
}

export default Products;
