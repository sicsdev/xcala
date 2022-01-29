import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Button, FormControl } from "@mui/material";
import "react-phone-number-input/style.css";
import Xcalalogo from "../../components/UI/Xcalalogo";
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import passwordstyles from "./Password.module.scss";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Password = () => {
  // const [values, setValues] = React.useState({
  //     password: '',
  //     sergfgh:"",
  //     showPassword: false,
  //   });
  // / statevariable password validor
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const [passwordHint, setPasswordHint] = useState(false);
  const [containsUL, setContainsUL] = useState(false); // uppercase letter
  const [containsLL, setContainsLL] = useState(false); // lowercase letter
  const [containsN, setContainsN] = useState(false); // number
  const [contains8C, setContains8C] = useState(false); // min 8 characters

  // const [confirmpassword, setConfirmpassword] = React.useState("");

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  //login logic
  const handleLogin = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Password do not match");
      setInterval(() => setError(""), 3000);
    }
  };

  const handleChange2 = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowconfirmPassword = (event) => {
    setShowconfirmPassword(!showconfirmPassword);
  };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  //password validor
  const mustContainData = [
    ["Letras y números", containsLL, containsN],
    ["Al menos una letra mayúscula", containsUL],
    ["Mínimo 8 caracteres (Máx. 16)", contains8C],
  ];

  const validatePassword = (event) => {
    let passwordOne = event.target.value;
    setPassword(passwordOne);

    // setPasswordHint(true);
    let temp_all_valid = true;
    // setDisableButton(false);
    // has lowercase letter
    if (passwordOne.toLowerCase() !== passwordOne) {
      setContainsUL(true);
    } else {
      setContainsUL(false);
      temp_all_valid = false;
    }
    if (passwordOne.toUpperCase() !== passwordOne) {
      setContainsLL(true);
      setContainsN((vall) => vall);
    } else {
      setContainsLL(false);
      setContainsN((vall) => vall);
      temp_all_valid = false;
    }
    // has number
    if (/\d/.test(passwordOne)) {
      setContainsN(true);
      setContainsLL((vall) => vall);
    } else {
      setContainsN(false);
      setContainsLL((vall) => vall);
      temp_all_valid = false;
    }

    // has 8 characters
    if (passwordOne.length >= 8 && passwordOne.length <= 16) {
      setContains8C(true);
    } else {
      setContains8C(false);
      temp_all_valid = false;
    }
    // all validations passed
    if (temp_all_valid) {
      // setPasswordHint(false);
      // setDisableButton(true);
    }
  };

  return (
    <>
      <Backgroundscreen />
      <Container maxWidth="sm">
        <Xcalalogo />
        <Grid item md={12} mb={3}>
          <div style={{ paddingBottom: "30px" }}>
            <Typography className="h2" variant="" component="">
              ¡Bienvenida Marcela!
            </Typography>
          </div>
        </Grid>
        <div className={passwordstyles.form_register}>
          <div className={passwordstyles.form_inner}>
            <Grid container maxWidth="sm" className={passwordstyles.bluebox}>
              <Grid item md={12}>
                <div className={passwordstyles.blueboxsection}>
                  <img src="/assets/images/ipassword.png"></img>
                  <div style={{ paddingLeft: "12px" }}>
                    <Typography className="p-16" variant="" component="">
                      Asegúrate de que tu contraseña tenga:
                    </Typography>
                  </div>
                </div>
              </Grid>

              <div className="password-hint-sec">
                {mustContainData.map((item, key) => {
                  if (item[1] === false || item[2] === false) {
                    return (
                      <Grid item md={12}>
                        <div key={key}>
                          <div className={passwordstyles.blueboxsection}>
                            {password.length == 0 ? (
                              <img
                                style={{ paddingRight: "9px" }}
                                className={passwordstyles.i}
                                src="/assets/images/blankpassword.png"
                              ></img>
                            ) : (
                              <CloseIcon style={{ color: "#D12D35" }} />
                            )}

                            <div style={{ paddingLeft: "11px" }}>
                              <Typography
                                className="p-14"
                                variant=""
                                component=""
                              >
                                {item[0]}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    );
                  } else {
                    return (
                      <div key={key}>
                        <div className={passwordstyles.blueboxsection}>
                          <DoneIcon style={{ color: "#49A197" }} />
                          <div style={{ paddingLeft: "11px" }}>
                            <Typography
                              className="p-14"
                              variant=""
                              component=""
                            >
                              {item[0]}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Grid>

            {/* passwordfield */}
            {error ? <span>{error}</span> : null}
            <div className={passwordstyles.password_form}>
              <FormControl sx={{ m: 1, width: "70%" }} variant="outlined">
                <InputLabel htmlFor="standard-adornment-password">
                  Nueva contraseña
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  // onChange={handleChange('password')}
                  onChange={(e) => validatePassword(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              {/* confirmpassword */}
              <FormControl
                style={{ marginTop: "2rem" }}
                sx={{ m: 1, width: "70%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="standard-adornment-password2">
                  Contraseña
                </InputLabel>
                <Input
                  id="standard-adornment-password2"
                  type={showconfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleChange2}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility2"
                        // onMouseDown={handleMouseDownPassword}
                        onClick={handleClickShowconfirmPassword}
                      >
                        {showconfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className={passwordstyles.btnn}>
                <Grid className="formbutton" item md={12}>
                  {/* <Button className="button-primary" onClick={handleLogin}>
                    Crear<span style={{ color: "transparent" }}>.</span>
                    contraseña
                  </Button> */}
                  <Link to="/success" className="button-primary">
                    Crear<span style={{ color: "transparent" }}>.</span>
                    contraseña
                  </Link>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Password;
