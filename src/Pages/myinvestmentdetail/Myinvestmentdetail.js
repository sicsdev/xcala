import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import MyinvestmentStyled from "./Myinvestmentdetail.module.scss";
import { Link } from "react-router-dom";
import Charts from "../../components/productgraph/Chart";
import Myinvestmentsummary from "../../components/Myinvestment-detail/Myinvestment-summary";
import StickyHeadTable from "../../components/Myinvestment-detail/Investment-table";
import Mobileversiontable from "../../components/Myinvestment-detail/Mobileversion-table";

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
              <Typography className="font-lg-28 museo-regular">
                Detalle de mi inversión
              </Typography>
            </div>
          </Grid>

          {/* row */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <div className={MyinvestmentStyled.cardstyle}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <div className={MyinvestmentStyled.card_h1}>
                      <img src="/assets/images/Iconos-Perfiles.svg"></img>
                      <Typography
                        className={`font-lg-32 ${MyinvestmentStyled.h1}`}
                      >
                        Xcala Renta Global Pesos
                      </Typography>
                    </div>
                    <div className={MyinvestmentStyled.link}>
                      <Link
                        style={{ backgroundColor: "#DEE5F2", color: "#182849" }}
                        className={MyinvestmentStyled.link1}
                        to=""
                      >
                        Para hacer crecer tu plata
                      </Link>
                      <Link
                        style={{ backgroundColor: "#E8D8EC", color: "#6E2B7F" }}
                        className={MyinvestmentStyled.link2}
                        to=""
                      >
                        Ciencia
                      </Link>
                    </div>
                  </Grid>

                  <Grid
                    className={MyinvestmentStyled.xcalacontainer}
                    container
                    xs={12}
                    md={6}
                  >
                    <div className={MyinvestmentStyled.incomepesos_btns}>
                      <div className="formbutton">
                        <Link
                          to=""
                          className={MyinvestmentStyled.green_btn}
                          style={{ color: "#49A197", textDecoration: "none" }}
                        >
                          <Button variant="outlined">
                            <img
                              style={{ marginRight: "15px" }}
                              src="/assets/images/payments.svg"
                            ></img>
                            Rescatar fondos
                          </Button>
                        </Link>
                      </div>
                      <div className={MyinvestmentStyled.primary_btn}>
                        <Link to="">
                          <Button style={{ textTransform: "none" }}>
                            <img
                              style={{ verticalAlign: "middle" }}
                              src="/assets/images/trending_up.svg"
                            ></img>{" "}
                            Invertir más
                          </Button>
                        </Link>
                      </div>
                    </div>
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
          <Grid
            className={MyinvestmentStyled.summary}
            container
            spacing={{ md: 3, xs: 0 }}
          >
            <Grid item xs={12} md={5}>
              <div style={{ marginBottom: "2rem" }}>
                <Typography className="font-lg-24 fw-600">Resumen</Typography>
                <Myinvestmentsummary />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div style={{ marginBottom: "2rem" }}>
                <Typography className="font-lg-24 fw-600">
                  Evolución del fondo
                </Typography>
              </div>

              <div className={MyinvestmentStyled.table_button}>
                <Link to="">
                  {" "}
                  <Button variant="outlined" className={MyinvestmentStyled.btn}>
                    {" "}
                    12 meses{" "}
                  </Button>{" "}
                </Link>
                <Link to="">
                  {" "}
                  <Button variant="outlined" className={MyinvestmentStyled.btn}>
                    {" "}
                    3 meses{" "}
                  </Button>{" "}
                </Link>
                <Link to="">
                  {" "}
                  <Button variant="outlined" className={MyinvestmentStyled.btn}>
                    {" "}
                    1 meses{" "}
                  </Button>{" "}
                </Link>
                <Link to="">
                  {" "}
                  <Button variant="outlined" className={MyinvestmentStyled.btn}>
                    {" "}
                    7 dias{" "}
                  </Button>{" "}
                </Link>
              </div>

              <Charts productdetail={"productdetail"} />
            </Grid>
          </Grid>
        </Container>

        {/* Table */}
        <Container maxWidth="lg">
          <div className={MyinvestmentStyled.summary}>
            <Grid item xs={12}>
              <div style={{ marginBottom: "2rem" }}>
                <Typography
                  style={{ fontWeight: "600" }}
                  className="font-lg-24"
                >
                  Cartola de movimientos
                </Typography>
              </div>
            </Grid>
            <div className="mobile-hide">
              <StickyHeadTable selector={"notselected"} />
            </div>
            <div className="desktop-hide">
              <Mobileversiontable />
            </div>
          </div>
        </Container>

        {/* Bluebox */}
        <Container maxWidth="lg">
          <div className={MyinvestmentStyled.bluebox}>
            <Grid mb={2} style={{ display: "flex" }} item xs={12}>
              <img
                style={{ marginRight: "12px" }}
                src="/assets/images/settings.svg"
                alt=""
              ></img>
              <Typography style={{ fontWeight: "600" }} className="font-lg-24">
                Pago de dividendos
              </Typography>
            </Grid>
            <div className={MyinvestmentStyled.text}>
              <Typography className="font-lg-18">
                Este fondo genera dividendos mensuales que acualmente son
                depositados en tu cuenta corriente Nº 1111111111111 del Banco de
                Chile.
              </Typography>
            </div>

            <Grid container spacing={2}>
              <Grid mb={2} style={{ display: "flex" }} item xs={12} md={6}>
                <div className={MyinvestmentStyled.invest_list}>
                  <img src="/assets/images/green_rightarrow.svg" alt=""></img>
                  <Typography className={MyinvestmentStyled.list_item}>
                    Prefiero reinvertir en este fondo
                  </Typography>
                </div>
              </Grid>
              <Grid mb={2} style={{ display: "flex" }} item xs={12} md={6}>
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
