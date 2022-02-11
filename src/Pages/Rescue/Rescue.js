import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import RescateStyled from "./Rescue.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";


function Rescue() {
  const [amount, setAmount] = React.useState("");

  const addamount = (event) => {
    setAmount(event.target.value);
  };

  const [amount2, setAmount2] = React.useState("");

  const addamount2 = (event) => {
    setAmount2(event.target.value);
  };

  // radiobtn
  const [radiobtnvalue, setRadiobtn] = React.useState("Rescatartodo");
  const [showform, setShowform] = React.useState(false);
  const radiobtnChange = (event) => {
    setRadiobtn(event.target.value);
    setShowform((prevstate) => !prevstate);
  };

  const [disableradiobtn, setDisableradiobtn] = React.useState(true);

  const disableradio = (event) => {
    setDisableradiobtn(false);
  };

  // select
  const [select, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className={RescateStyled.top_banner}>
        <Container maxWidth="lg">
          <Grid style={{ paddingLeft: "0px" }} item xs={12}>
            <div
              style={{ justifyContent: "start" }}
              className={RescateStyled.heading}
            >
              <img src="/assets/images/product_rect.png" alt=""></img>
              <Typography className="font-lg-28 museo-regular">
                Rescatar fondos
              </Typography>
            </div>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <div className={RescateStyled.card_h1}>
                <img src="/assets/images/Iconos-Perfiles.svg"></img>
                <div className={RescateStyled.subtitle}>
                  <Typography className={`font-lg-20 ${RescateStyled.fondo}`}>Fondo</Typography>
                  <Typography className={`font-lg-24 ${RescateStyled.h1}`}>
                    Xcala Balanceado Global
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={`card-bordered ${RescateStyled.cardstyle}`}>
                <Typography className={`font-lg-18 ${RescateStyled.tableheading}`}>
                  Tienes
                </Typography>
                <Typography className={RescateStyled.tabledata}>
                  USD$ 9.259,25
                  <span
                    className={`font-lg-24 fw-600 ${RescateStyled.fade_text}`}
                  >
                    $ 7.500.000*
                  </span>
                </Typography>
                <div className={`font-lg-18 ${RescateStyled.fade_text18}`}>
                  Plazo de rescate Máx. 11 días corridos
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={RescateStyled.grey_section}>
        <Container maxWidth="lg">
          <Grid className={RescateStyled.request_section} container>
            <Grid className={RescateStyled.rescueall} item xs={12} md={6}>
              <Typography className="font-lg-24 fw-600 blue_text">
                ¿Qué quieres hacer?
              </Typography>

              {/* RadioButton */}
              <div className={RescateStyled.identity_radio}>
                <FormControl className={RescateStyled.radiobutton}>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={radiobtnvalue}
                    onChange={radiobtnChange}
                  >
                    <FormControlLabel
                      value="Rescatartodo"
                      control={<Radio />}
                      label="Rescatar todo"
                    />
                    <FormControlLabel
                      value="Rescatarsólounaparte"
                      control={<Radio />}
                      label="Rescatar sólo una parte"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {/* 2nd radiobtn fields */}
              {showform ? (
                <div className={RescateStyled.radiobtncontent}>
                  <div className={RescateStyled.radiobtn_amount}>
                    <FormControl
                      fullWidth
                      sx={{ m: 1, maxWidth: 150 }}
                      variant="standard"
                    >
                      <InputLabel htmlFor="standard-adornment-amount">
                      Monto*
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        value={amount}
                        onChange={addamount}
                        startAdornment={
                          <InputAdornment position="start">
                            USD $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <span className={RescateStyled.isequalto}>=</span>
                    <FormControl
                      fullWidth
                      sx={{ m: 1, maxWidth: 150 }}
                      variant="standard"
                    >
                      <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        value={amount2}
                        onChange={addamount2}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>

                  <div className={RescateStyled.fade_text12}>
                    *Equivalente a {" "}
                    <span style={{ fontWeight: "600" }}>123,25 cuota</span>
                    <div className={RescateStyled.tooltipicon}><Tooltip title="Icon">
                      <IconButton>
                        <img src="/assets/images/ipassword.png"></img>
                      </IconButton>
                    </Tooltip></div>
                  </div>
                </div>
              ) : null}
            </Grid>
            <Grid className={RescateStyled.deposit_section} item xs={12} md={6}>
              <Typography className="font-lg-24 fw-600 blue_text">
                ¿Dónde hacemos el depósito?
              </Typography>

              <FormControl
                className={RescateStyled.selector}
                variant="standard"
                sx={{ m: 1, minWidth: 290 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Cuenta
                </InputLabel>
                <Select
                 fullWidth
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={select}
                  onChange={handleChange}
                  disabled={disableradiobtn}
                  IconComponent={() => <img src="/assets/images/arrow_down.svg"/>}
                >
                  <MenuItem value={10}>Banco de Chile - N° 1890567891</MenuItem>
                  <MenuItem value={20}>Banco de Chile - N°</MenuItem>
                </Select>
              </FormControl>

              <Typography className={RescateStyled.edit_icon} mt={2}>
                <Link
                  onClick={disableradio}
                  to=""
                  className="dark-green fw-600"
                >
                  <EditIcon /> Editar cuenta
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid className={RescateStyled.btn} item xs={12} item md={12}>
            <Link to="">
              <Button className="button-primary">Solicitar rescate</Button>
            </Link>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Rescue;
