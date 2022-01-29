import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid, TextField, Checkbox, Button } from "@mui/material";
import styles from "./Register.module.scss";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Xcalalogo from "../../components/UI/Xcalalogo";
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import { Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from '@mui/icons-material/Close';

function Firstpage() {
  const [name, setName] = useState("");
  const [motherslastname, setMothername] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState("");
  const [logo4, setLogo4] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [value, setValue] = useState("");

  const [activeinputcolor, setactiveinputcolor] = useState("");
  const [helpermsg, setHelpermsg] = useState({
    logo: "",
    logo2: "",
    logo3: "",
    namehelpermsg: "",
    namehelpermsgcolor: false,
    mothernamehelpermsg: "",
    mothernamehelpermsgcolor: false,
    lastnamehelpermsg: "",
    lastnamehelpermsgcolor: false,
    emailhelpermsgcolor: false,
  });

  //this is for name textfiled (Nombre)
  const onnamechange = (e) => {
    setName(e.target.value);
    if (name.length >= 2) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "Perfecto",
          logo: <DoneIcon />,
          namehelpermsgcolor: true,
        };
      });
    }
    if (name.length == 1) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "",
          namehelpermsgcolor: false,
        };
      });
    }
  };

  //this is for motherlastname textfiled (Apellido materno)
  const onmothernamechange = (e) => {
    setMothername(e.target.value);
    if (motherslastname.length >= 2) {
      setHelpermsg((mothernametext) => {
        return {
          ...mothernametext,
          mothernamehelpermsg: "Muy bien",
          logo2: <DoneIcon />,
          mothernamehelpermsgcolor: true,
        };
      });
    }
    if (motherslastname.length == 1) {
      setHelpermsg((mothernametext) => {
        return {
          ...mothernametext,
          mothernamehelpermsg: "",
          mothernamehelpermsgcolor: false,
        };
      });
    }
  };

  //this is for lastname textfiled (Apellido paterno)
  const onlastnamechange = (e) => {
    setLastname(e.target.value);
    if (lastname.length >= 2) {
      setHelpermsg((lastnametext) => {
        return {
          ...lastnametext,
          lastnamehelpermsg: "Muy bien",
          logo3: <DoneIcon />,
          lastnamehelpermsgcolor: true,
        };
      });
    }
    if (lastname.length == 1) {
      setHelpermsg((lastnametext) => {
        return {
          ...lastnametext,
          lastnamehelpermsg: "",
          lastnamehelpermsgcolor: false,
        };
      });
    }
  };

  //this is for email
  const error = (e) => {
    const val = e.target.value;

    if (isEmail(val)) {
      setEmailError(false);
      setEmailSuccess("¡Queda poco!");
      setLogo4(<DoneIcon />);
      setErrormsg("");
    } else {
      setEmailError(true);
      setErrormsg("Algo anda mal... Verifica tu email");
      setLogo4(<CloseIcon />);
      setEmailSuccess("");
      return;
    }
  };

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Backgroundscreen />
        <div className={styles.register_wrapper}>
          <Container maxWidth="sm">
            <Grid container maxWidth="sm" spacing={2}>
              <Xcalalogo />
              <Grid item md={12} mb={3}>
                <div className="h2">
                  <img src="/assets/images/Rectangle.png" alt=""></img>
                  <Typography className="h2" variant="" component="">
                    ¡Únete a Xcala!
                  </Typography>
                </div>
                <div className="p-center">
                  <Typography className="p-18" variant="" component="">
                    Invierte seguro, invierte con propósito...
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div className={styles.form_register}>
              <div className={styles.form_inner}>
                <Grid
                  container
                  maxWidth="sm"
                  spacing={2}
                  className={styles.bluebox}
                >
                  <Grid item md={12}>
                    <div style={{ display: "flex" }}>
                      <img
                        src="/assets/images/regis-icon-2.svg"
                        alt=""
                        width={20}
                        height={20}
                        style={{ paddingTop: "5px" }}
                      ></img>
                      <div
                        className={styles.p1}
                        style={{ paddingLeft: "10px" }}
                      >
                        <Typography className="p-16" variant="" component="">
                          Recibirás en tu correo una clave temporal para
                          ingresar a tu cuenta de prueba.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={12} style={{ paddingTop: "0" }}>
                    <div style={{ display: "flex" }}>
                      <img
                        src="/assets/images/regis-icon-1.svg"
                        alt=""
                        width={20}
                        height={20}
                        style={{ paddingTop: "5px" }}
                      ></img>
                      <div
                        className={styles.p1}
                        style={{ paddingLeft: "10px" }}
                      >
                        <Typography className="p-16" variant="" component="">
                          Define tu perfil de riesgo y revisa nuestras
                          recomendaciones personalizadas.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid container maxWidth="sm">
                  <form>
                    <div className={styles.register_input_text}>
                      <TextField
                        className={
                          helpermsg.namehelpermsgcolor
                            ? styles.textfieldcolorrrr
                            : ""
                        }
                        fullWidth
                        onChange={onnamechange}
                        id="standard-basic"
                        label="Nombre"
                        variant="standard"
                        type="text"
                        FormHelperTextProps={{
                          className: styles.helperTextcolor || "",
                        }}
                        helperText={[helpermsg.logo, helpermsg.namehelpermsg]}
                      />
                    </div>
                    <div className={styles.register_input_text}>
                      <TextField
                        fullWidth
                        className={
                          helpermsg.mothernamehelpermsgcolor
                            ? styles.textfieldcolorrrr
                            : ""
                        }
                        onChange={onmothernamechange}
                        id="standard-basic"
                        label="Apellido materno"
                        variant="standard"
                        type="text"
                        FormHelperTextProps={{
                          className: styles.helperTextcolor || "",
                        }}
                        // helperText={helpermsg.mothernamehelpermsg}
                        helperText={[
                          helpermsg.logo2,
                          helpermsg.mothernamehelpermsg,
                        ]}
                      />
                    </div>
                    <div className={styles.register_input_text}>
                      <TextField
                        fullWidth
                        className={
                          helpermsg.lastnamehelpermsgcolor
                            ? styles.textfieldcolorrrr
                            : ""
                        }
                        onChange={onlastnamechange}
                        id="standard-basic"
                        label="Apellido paterno"
                        variant="standard"
                        type="text"
                        FormHelperTextProps={{
                          className: styles.helperTextcolor || "",
                        }}
                        // helperText={helpermsg.lastnamehelpermsg}
                        helperText={[
                          helpermsg.logo3,
                          helpermsg.lastnamehelpermsg,
                        ]}
                      />
                    </div>
                    <div className={styles.register_input_text}>
                      <TextField
                        id="standard-basic"
                        label="RUT"
                        variant="standard"
                      />
                    </div>
                    {/* <h1>{helpermsg.logo}</h1> */}
                    <div className={styles.register_input_text}>
                      <TextField
                        className={emailSuccess ? styles.textfieldcolorrrr : ""}
                        fullWidth
                        error={emailError ? emailError : false}
                        onChange={error}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        type="email"
                        FormHelperTextProps={{
                          className: styles.helperTextcolor || "",
                        }}
                        helperText={errormsg ? [logo4, errormsg] :[logo4, emailSuccess]}
                      />
                    </div>
                    <div className={styles.register_input_text}>
                      <Grid container maxWidth="sm" spacing={2}>
                        {/* <Grid item md={3} style={{ paddingTop: "0" }}>
                        <TextField
                          fullWidth
                          id="standard-basic"
                          label="Email"
                          variant="standard"
                        />
                      </Grid> */}
                        <Grid item md={12} style={{ paddingTop: "40px" }}>
                          {/* <TextField
                          fullWidth
                          id="standard-basic"
                          label=""
                          variant="standard"
                        /> */}
                          <PhoneInput
                            international
                            countrySelectProps={{ unicodeFlags: false }}
                            defaultCountry="RU"
                            value={value}
                            onChange={setValue}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={styles.register_input_text}>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "3.4rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <Checkbox />
                        <div className="p1" style={{ paddingLeft: "10px" }}>
                          <p className="p-16">
                            Acepto los{" "}
                            <span className={styles.greentext}>
                              términos y condiciones del servicio{" "}
                            </span>
                            de Xcala.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Grid className="formbutton" item md={12}>
                      <Button className="button-primary" disabled>
                        Continuar
                      </Button>
                    </Grid>
                  </form>
                </Grid>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    </>
  );
}

export default Firstpage;
