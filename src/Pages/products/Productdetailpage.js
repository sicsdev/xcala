import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import Button from "@mui/material";
import productgraphstyles from "./Productdetailpage.module.scss";
import { Link } from "react-router-dom";
import Charts from "../../components/productgraph/Chart";
import Productdetailconditions from "../../components/productgraph/Productdetailconditions";
function Productdetailpage() {

  return (
    <div className={productgraphstyles.productdetail}>
      <Container className={productgraphstyles.wrapper} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={8} xs={12} mb={3}>
            <div className={productgraphstyles.heading}>
              <img src="/assets/images/polygon.png" alt=""></img>
              <Typography
                className={productgraphstyles.h2}

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
          </Grid>
          <Grid className="formbutton mobile-hide" item md={4}>
            <div className={productgraphstyles.btn1}>
              <Link to="/simulator" style={{ width: "200px", margin: '30px auto 0' }} className="button-primary">
                Simular inversión
              </Link>
            </div>
          </Grid>
        </Grid>
        {/* warning text  */}
        <Grid item md={12} xs={12} mb={3}>
          <div className={productgraphstyles.heading}>
            <img src="/assets/images/warning.svg" alt=""></img>
            <Typography
              style={{ color: "#D12D35" }}
              className="p-16"
            >
              Este fondo supera el riesgo definido en tu perfil Conservador
            </Typography>
          </div>
          <div className={productgraphstyles.p}>
            <Typography
              className={productgraphstyles.fadetext}

            >
              El Fondo tiene como objetivo principal invertir sus recursos en
              acciones “Man AHL TargetRisk”, el cual corresponde a un portfolio
              separado de inversiones o sub-fondo... [+].
            </Typography>
          </div>
        </Grid>

        <Grid container spacing={3} className='table-data-wrapper'>
          <Grid item xs={12} md={6}>
            <div style={{ marginBottom: "2rem" }}>
              <Typography
                className="font-lg-24 fw-600"
              >
                Evolución del fondo
              </Typography>

              <div className={productgraphstyles.table_button}>
                <Link to=""> <Button variant="outlined" className={productgraphstyles.btn}> 12 meses </Button> </Link>
                <Link to=""> <Button variant="outlined" className={productgraphstyles.btn}> 3 meses </Button> </Link>
                <Link to=""> <Button variant="outlined" className={productgraphstyles.btn}> 1 meses </Button> </Link>
                <Link to=""> <Button variant="outlined" className={productgraphstyles.btn}> 7 dias </Button> </Link>
             </div>

            </div>
            <Charts productdetail={"productdetail"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Productdetailconditions />
          </Grid>
        </Grid>

        <div className={productgraphstyles.pdf_section}>
          <div className={productgraphstyles.doc_head}>
            <Typography
              className="font-lg-24 fw-600"

            >
              Documentación de interés
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Folleto informativo
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Valores cuota (2021)
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid className={productgraphstyles.flexxx} item xs={12} md={4}></Grid>
          </Grid>

          <Grid mt={0.1} container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Reglamento interno
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={productgraphstyles.heading}>
                <img src="/assets/images/pdf.svg" alt=""></img>
                <Typography className="p-16" variant="" component="">
                  <Link style={{ color: "#182849" }} to="/">
                    Informe de auditores externos (2020)
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid className={productgraphstyles.flexxx} item xs={12} md={4}>
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
        <Grid mt={2} className="formbutton text-center" item md={12}>
          <Link to="/simulator" style={{ width: "200px", margin: '30px auto 0' }} className="button-primary">
            Simular inversión
          </Link>
        </Grid>
      </Container>
    </div>
  )
}
export default Productdetailpage;