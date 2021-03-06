import React from "react";
import "react-phone-number-input/style.css";
import simulatorstyle from "./Simulator.module.scss";
import {
  Grid,
  TextField,
  Select,
  Container,
  Button,
  InputLabel,
  Input,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { IconButton, Tooltip } from "@mui/material";
import Simulatorresult from "./Simulator-result";
import Customselect from "../../components/UI/select";

function Simulator() {
  const [name, setName] = useState("");
  const [helpermsg, setHelpermsg] = useState({
    namehelpermsg: "",
    namehelpermsgcolor: false,
  });
  const [amount, setAmount] = React.useState("");
  const [optionalamount, setOptionalamount] = React.useState("");
  const [investment, setInvestment] = React.useState([0]);
  const [simulator, setSimulator] = React.useState(false);

  const ShowSimulator = () => {
    setSimulator(true);
  };

  const onnamechange = (e) => {
    setName(e.target.value);
    if (name.length >= 2) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "Ver otros fondos",
          namehelpermsgcolor: true,
        };
      });
    }
    if (name.length === 1) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "",
          namehelpermsgcolor: false,
        };
      });
    }
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeoptional = (event) => {
    setOptionalamount(event.target.value);
  };

  const estimate = (event) => {
    setInvestment(event.target.value);
  };

  return (
    <>
      <div className={simulatorstyle.bgcolor}>
        <Container maxWidth="lg" className="simulator-wrapper">
          <Grid container className={simulatorstyle.simulate} spacing={5}>
            <Grid item md={4} xs={12} className={simulatorstyle.simulate_grid}>
              <Grid
                className={simulatorstyle.container}
                bgcolor={"#fff"}
                maxWidth="sm"
                spacing={2}
              >
                <Grid style={{ paddingLeft: "0px" }} item xs={12}>
                  <div
                    style={{ justifyContent: "start" }}
                    className={simulatorstyle.heading}
                  >
                    <img src="/assets/images/Rectangle.png" alt=""></img>
                    <Typography
                      className="font-lg-24 museo-regular"

                    >
                      Simula tu inversi??n
                    </Typography>
                  </div>
                </Grid>

                <form>
                  <div className={simulatorstyle.register_input_text}>
                    <div className={simulatorstyle.form_inputs}>
                      <FormControl fullWidth variant="standard">
                        <TextField
                          className={
                            helpermsg.namehelpermsgcolor
                              ? simulatorstyle.textfieldcolorrrr
                              : ""
                          }
                          fullWidth
                          onChange={onnamechange}
                          id="standard-basic"
                          label="Fondo"
                          variant="standard"
                          type="text"
                          FormHelperTextProps={{
                            className: simulatorstyle.helperTextcolor || "",
                          }}
                          helperText={helpermsg.namehelpermsg}
                        />
                      </FormControl>
                    </div>

                    <div className={simulatorstyle.form_inputs}>
                      <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">
                          Inversi??n Inicial
                        </InputLabel>
                        <Input
                          id="standard-adornment-amount"
                          value={amount}
                          onChange={handleChange}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                        />{" "}
                      </FormControl>
                      <div className={simulatorstyle.text}>
                        <Typography
                          className={simulatorstyle.fadetext}
                          variant=""
                          component=""
                        >
                          Disclaimer la rentabilidad calculada en la moneda de
                          origen del fondo.
                        </Typography>
                      </div>
                    </div>

                    <div className={simulatorstyle.form_inputs}>
                      <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">
                          Aporte Mensual (Opcional)
                          <Tooltip title="icon">
                            <IconButton>
                              <img src="/assets/images/i_icon.svg"></img>
                            </IconButton>
                          </Tooltip>
                        </InputLabel>
                        <Input
                          id="standard-adornment-amount"
                          value={optionalamount}
                          onChange={handleChangeoptional}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>

                    <div className={simulatorstyle.form_inputs}>
                      <Customselect
                        label="Plazo estimado de inversi??n (Horizonte)"
                        Labelid="demo-simple-select-standard-label"
                        placholder="demo-simple-select-standard-label"
                        Selectid="demo-simple-select-standard-label"
                        id="bank-name"
                        onChange={estimate}
                        value={investment}
                        
                      />
                    </div>
                    <Grid className={simulatorstyle.btn} item md={12}>
                      <Button
                        className="button-primary"
                        onClick={ShowSimulator}
                      >
                        Calcular
                      </Button>
                    </Grid>
                  </div>
                </form>
              </Grid>
            </Grid>
            {simulator ? (
              <Grid item md={8} item xs={12} className={simulatorstyle.simulator_result_wrapper}>
                <Simulatorresult />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default Simulator;