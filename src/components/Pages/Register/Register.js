import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid, TextField, Select, Checkbox, Button } from "@mui/material";
// import Rectangle from "../Rectangle.png";
// import xcalalogo from "../logo.svg";
// import messagebox from "../regis-icon-2.svg";
// import vector from "../regis-icon-1.svg";
import styles from "./Register.module.scss";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import "react-phone-number-input/style.css";

function Firstpage() {
  const [name, setName] = useState("");
  const [motherslastname, setMothername] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [activeinputcolor, setactiveinputcolor] = useState("");
  const [helpermsg, setHelpermsg] = useState({
    namehelpermsg: "",
    mothernamehelpermsg: "",
    lastnamehelpermsg: "",
  });

  //this is for name textfiled (Nombre)
  const onnamechange = (e) => {
    setName(e.target.value);
    if (name.length >= 2) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "Perfecto",
        };
      });
    }
    if (name.length == 1) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "",
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
        };
      });
    }
    if (motherslastname.length == 1) {
      setHelpermsg((mothernametext) => {
        return {
          ...mothernametext,
          mothernamehelpermsg: "",
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
        };
      });
    }
    if (lastname.length == 1) {
      setHelpermsg((lastnametext) => {
        return {
          ...lastnametext,
          lastnamehelpermsg: "",
        };
      });
    }
  };

  //this is for email
  const error = (e) => {
    const val = e.target.value;

    if (isEmail(val)) {
      setEmailError(false);
      setErrormsg("");
    } else {
      setEmailError(true);
      setErrormsg("Algo anda mal... Verifica tu email");
      return;
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.register_wrapper}>
        <Container maxWidth="sm">
          <Grid container maxWidth="sm" spacing={2}>
            <Grid item md={12}>
              <div className="xcala-logo">
                <img src="/assets/images/logo.svg" alt="logo"></img>
              </div>
            </Grid>
            <Grid item md={12} mb={3}>
              <div className={styles.rectangle_heading}>
                <img src="/assets/images/Rectangle.png" alt=""></img>
                <p>¡Únete a Xcala!</p>
              </div>

              <div className={styles.rectangle_p}>
                <p>Invierte seguro, invierte con propósito...</p>
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
                    <div className="p1" style={{ paddingLeft: "10px" }}>
                      <p>
                        Recibirás en tu correo una clave temporal para ingresar
                        a tu cuenta de prueba.
                      </p>
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
                    <div className="p1" style={{ paddingLeft: "10px" }}>
                      <p>
                        Define tu perfil de riesgo y revisa nuestras
                        recomendaciones personalizadas.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container maxWidth="sm">
                <form>
                  <div className={styles.register_input_text}>
                    {/* {helpermsg.namehelpermsg != undefined ? } */}
                    <TextField
                      fullWidth
                      onChange={onnamechange}
                      id="standard-basic"
                      label="Nombre"
                      variant="standard"
                      type="text"
                      helperText={helpermsg.namehelpermsg}
                      autoComplete=""
                    />
                  </div>
                  <div className={styles.register_input_text}>
                    <TextField
                      fullWidth
                      onChange={onmothernamechange}
                      id="standard-basic"
                      label="Apellido materno"
                      variant="standard"
                      type="text"
                      helperText={helpermsg.mothernamehelpermsg}
                    />
                  </div>
                  <div className={styles.register_input_text}>
                    <TextField
                      fullWidth
                      onChange={onlastnamechange}
                      id="standard-basic"
                      label="Apellido paterno"
                      variant="standard"
                      type="text"
                      helperText={helpermsg.lastnamehelpermsg}
                    />
                  </div>
                  <div className={styles.register_input_text}>
                    <TextField
                      id="standard-basic"
                      label="RUT"
                      variant="standard"
                    />
                  </div>
                  <div className={styles.register_input_text}>
                    <TextField
                      fullWidth
                      error={emailError}
                      onChange={error}
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      type="email"
                      helperText={errormsg}
                    />
                  </div>
                  <div className={styles.register_input_text}>
                    <Grid container maxWidth="sm" spacing={2}>
                      <Grid item md={3} style={{ paddingTop: "0" }}>
                        <Select
                          fullWidth
                          id="standard-basic"
                          label="Email"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item md={9} style={{ paddingTop: "0" }}>
                        <TextField
                          fullWidth
                          id="standard-basic"
                          label=""
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={styles.register_input_text}>
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <Checkbox />
                      <div className="p1" style={{ paddingLeft: "10px" }}>
                        <p>
                          Acepto los{" "}
                          <span>términos y condiciones del servicio </span>de
                          Xcala.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Grid item md={12}>
                    <Button fullWidth className="button-primary" disabled>
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
  );
}

export default Firstpage;
