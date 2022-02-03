import React from "react";
import { Typography, Grid, Container, Button } from "@mui/material";
import productgraphstyles from "./Productdetailpage.module.scss";
import { Link } from "react-router-dom";
import Charts from "../../components/productgraph/Chart";
import Productdetailconditions from "../../components/productgraph/Productdetailconditions";

function Productdetailpage() {
  return (
    <div className={productgraphstyles.productdetail}>
      <Container className={productgraphstyles.wrapper} maxWidth="lg">
        <Grid item md={12} mb={3}>
          <div className={productgraphstyles.heading}>
            <img src="/assets/images/polygon.png" alt=""></img>
            <Typography
              className={productgraphstyles.h2}
              variant=""
              component=""
            >
              Xcala Deuda Privada Global
            </Typography>
          </div>
          <div className={productgraphstyles.link}>
            <Link className={productgraphstyles.link1} to="">
              Generar ingresos
            </Link>
            <Link className={productgraphstyles.link2} to="">
              Medioambiente
            </Link>
          </div>
          <Grid className="formbutton" item md={12}>
            <div className={productgraphstyles.btn1}>
              <Button style={{ width: "300px" }} className="button-primary">
                Simular inversión
              </Button>
            </div>
          </Grid>
          {/* warning text  */}
          <div className={productgraphstyles.heading}>
            <img src="/assets/images/warning.svg" alt=""></img>
            <Typography
              style={{ color: "#D12D35" }}
              className="p-16"
              variant=""
              component=""
            >
              Este fondo supera el riesgo definido en tu perfil Conservador
            </Typography>
          </div>
          <div className={productgraphstyles.p}>
            <Typography
              className={productgraphstyles.fadetext}
              variant=""
              component=""
            >
              El Fondo tiene como objetivo principal invertir sus recursos en
              acciones “Man AHL TargetRisk”, el cual corresponde a un portfolio
              separado de inversiones o sub-fondo... [+].
            </Typography>
          </div>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div style={{marginBottom:"2rem"}}>
            <Typography
              style={{ fontSize: "24px", fontWeight: "600" }}
              className="p-18"
              variant=""
              component=""
            >
              Evolución del fondo
            </Typography>
            </div>
            <Charts productdetail = {"productdetail"}/>
          </Grid>
          <Grid item xs={6}>
            <Productdetailconditions />
          </Grid>
        </Grid>

        <div className={productgraphstyles.pdf_section}>
          <div className={productgraphstyles.doc_head}>
            <Typography
              style={{ fontSize: "24px", fontWeight: "600" }}
              className="p-18"
              variant=""
              component=""
            >
              Documentación de interés
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Folleto informativo
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Valores cuota (2021)
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid className={productgraphstyles.flexxx} item xs={4}></Grid>
          </Grid>

          <Grid mt={0.1} container spacing={2}>
            <Grid item xs={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Reglamento interno
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Informe de auditores externos (2020)
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid className={productgraphstyles.flexxx} item xs={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Estados Financieros (Junio 2021)
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Button */}
        <Grid mt={2} className="formbutton" item md={12}>
          <Button style={{ width: "300px" }} className="button-primary">
            Simular inversión
          </Button>
        </Grid>
      </Container>
    </div>
  );

    return (
        <div className={productgraphstyles.productdetail}>
            <Container className={productgraphstyles.wrapper} maxWidth="lg">
                <Grid container item md={12} mb={3}>
                    <Grid className="formbutton" item md={8}>
                        <div className={productgraphstyles.heading}>
                            <img src="/assets/images/polygon.png" alt=""></img>
                            <Typography className={productgraphstyles.h2} variant="" component="">
                                Xcala Deuda Privada Global
                            </Typography>
                        </div>
                        <div className={productgraphstyles.link}>
                            <Link className={productgraphstyles.link1} to="">Generar ingresos</Link>
                            <Link className={productgraphstyles.link2} to="">Medioambiente</Link>
                        </div>
                    </Grid>
                    <Grid className="formbutton" item md={4}>
                        <div className={productgraphstyles.btn1}>
                            <Button style={{ width: "300px" }} className="button-primary">
                                Simular inversión
                            </Button>
                        </div>
                    </Grid>
                    {/* warning text  */}
                    <div className={productgraphstyles.heading}>
                        <img src="/assets/images/warning.svg" alt=""></img>
                        <Typography style={{ color: "#D12D35" }} className="p-16" variant="" component="">
                            Este fondo supera el riesgo definido en tu perfil Conservador
                        </Typography>
                    </div>
                    <div className={productgraphstyles.p}>
                        <Typography
                            className={productgraphstyles.fadetext}
                            variant=""
                            component=""
                        >
                            El Fondo tiene como objetivo principal invertir sus recursos en acciones “Man AHL TargetRisk”, el cual corresponde a un portfolio separado de inversiones o sub-fondo... [+].
                        </Typography>
                    </div>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "24px", fontWeight: "600" }} className="p-18" variant="" component="">
                            Evolución del fondo
                        </Typography>
                        <Charts />
                    </Grid>
                    <Grid item xs={6}>
                        <Productdetailconditions />
                    </Grid>
                </Grid>

                <div className={productgraphstyles.pdf_section}>
                    <div className={productgraphstyles.doc_head}>
                        <Typography style={{ fontSize: "24px", fontWeight: "600" }} className="p-18" variant="" component="">
                            Documentación de interés
                        </Typography>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <div className={productgraphstyles.heading}>
                                <img src="/assets/images/pdf.svg" alt=""></img>
                                <Typography className="p-16" variant="" component="">
                                    <Link style={{ color: "#182849" }} to="/">Folleto informativo</Link>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div className={productgraphstyles.heading}>
                                <img src="/assets/images/pdf.svg" alt=""></img>
                                <Typography className="p-16" variant="" component="">
                                    <Link style={{ color: "#182849" }} to="/">Valores cuota (2021)</Link>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid className={productgraphstyles.flexxx} item xs={4}>

                        </Grid>
                    </Grid>

                    <Grid mt={0.1} container spacing={2}>
                        <Grid item xs={4}>
                            <div className={productgraphstyles.heading}>
                                <img src="/assets/images/pdf.svg" alt=""></img>
                                <Typography className="p-16" variant="" component="">
                                    <Link style={{ color: "#182849" }} to="/">Reglamento interno</Link>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div className={productgraphstyles.heading}>
                                <img src="/assets/images/pdf.svg" alt=""></img>
                                <Typography className="p-16" variant="" component="">
                                    <Link style={{ color: "#182849" }} to="/">Informe de auditores externos (2020)</Link>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid className={productgraphstyles.flexxx} item xs={4}>
                            <div className={productgraphstyles.heading}>
                                <img src="/assets/images/pdf.svg" alt=""></img>
                                <Typography className="p-16" variant="" component="">
                                    <Link style={{ color: "#182849" }} to="/">Estados Financieros (Junio 2021)</Link>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                {/* Button */}
                <Grid mt={2} className="formbutton" item md={12}>
                    <Button style={{ width: "300px" }} className="button-primary">
                        Simular inversión
                    </Button>

                </Grid>
            </Container>
        </div>
    );
}
export default Productdetailpage;