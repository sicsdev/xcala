import React from 'react';
import Container from "@mui/material/Container";
import { Grid, FormControl } from "@mui/material";
import "react-phone-number-input/style.css";
import Xcalalogo from "../../components/UI/Xcalalogo";
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import loginstyles from "./Login.module.scss"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  const [values, setValues] = React.useState({
    password: '',
    sergfgh: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Backgroundscreen />
      <Container maxWidth="sm">
        <Grid container maxWidth="sm" spacing={2} className={loginstyles.login_logo}>
          <Grid item xs={12} md={12} mb={3}>
            <Xcalalogo />
          </Grid>
        </Grid>
        <div className={loginstyles.form_login}>
          <div className={loginstyles.form_inner}>
            <Grid container maxWidth="sm">
              <form className={loginstyles.login_form}>
                <div className={loginstyles.register_input_text}>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Email o RUT"
                    variant="standard"
                    type="email"
                  />
                </div>

                <div className={loginstyles.password_form}>
                  <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    /></FormControl></div>
                <div className={loginstyles.pass_text}>
                  <Typography className={loginstyles.p_14} >
                    <Link to="/forgetpassword">¿Olvidaste tu contraseña?</Link>
                  </Typography>
                </div>
                <Grid className="formbutton" item xs={12} md={12}>
                  <div className={loginstyles.continue_btn}>
                    <Link to="/profile-investor" className="button-primary">
                      Ingresar
                    </Link>
                  </div>
                  {/* <Button className="button-primary">
                    <Link to="/profile-investor">
                      Ingresar
                    </Link>
                  </Button> */}

                  <div className={`mobile-hide ${loginstyles.btn_text}`}>
                    <Link to="/">¿Aún no estás registrado?</Link>
                  </div>
                </Grid>
              </form>
            </Grid>
          </div>

        </div>
        <div className={`desktop-hide text-center ${loginstyles.btn_text}`}>
          <Link to="/">¿Aún no estás registrado?</Link>
        </div>
      </Container >

    </>
  );
}

export default Login;
