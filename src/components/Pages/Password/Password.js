import React from 'react';
import Container from "@mui/material/Container";
import { Grid, Button, FormControl  } from "@mui/material";
import "react-phone-number-input/style.css";
import Xcalalogo from "../Xcalalogo";
import Backgroundscreen from "../../Backgroundscreen";
import password from "./Password.module.scss"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';

function Password() {

    const [values, setValues] = React.useState({
        password: '',
        sergfgh:"",
        showPassword: false,
      });
      const [confirmpassword, setConfirmpassword] = React.useState("");
       
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
         
      const handleChange2 =(event) => {
        setConfirmpassword(event.target.value)
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
      <Backgroundscreen/>
        <Container maxWidth="sm">
            <Xcalalogo/>
            <Grid item md={12} mb={3}>
              <div style={{ paddingBottom: "30px" }}>
                <Typography className="h2" variant="" component="">
                ¡Bienvenida Marcela!
                </Typography>
              </div>
            </Grid>
          <div className={password.form_register}>
            <div className={password.form_inner}>
              <Grid
                container
                maxWidth="sm"

                className={password.bluebox}
              >
                <Grid item md={12}>
                  <div className={password.blueboxsection}>
                    <img
                      src="/assets/images/ipassword.png"
                     ></img>
                    <div style={{ paddingLeft: "12px" }}>
                      <Typography className="p-16" variant="" component="">
                      Asegúrate de que tu contraseña tenga:
                      </Typography>
                    </div>
                  </div>
                </Grid>                  
                <Grid item md={12}>
                  <div className={password.blueboxsection}>
                    <img
                      src="/assets/images/blankpassword.png"
                     ></img>
                    <div style={{ paddingLeft: "12px" }}>
                      <Typography className={password.p_14} variant="" component="">
                      Letras y números
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item md={12} style={{ paddingTop: "0" }}>
                  <div className={password.blueboxsection}>
                    <img
                      src="/assets/images/blankpassword.png"
                      alt=""
                    ></img>
                    <div style={{ paddingLeft: "12px" }}>
                        <Typography className={password.p_14} variant="" component="">
                      Al menos una letra mayúscula
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item md={12} style={{ paddingTop: "0" }}>
                  <div className={password.blueboxsection}>
                    <img
                      src="/assets/images/blankpassword.png"
                      alt=""
                    ></img>
                    <div style={{ paddingLeft: "12px" }}>
                      <Typography className={password.p_14} variant="" component="">
                      Mínimo 8 caracteres (Máx. 16)
                      </Typography>
                    </div>
                  </div>
                </Grid>                
              </Grid>

        {/* passwordfield */}
    <div className={password.password_form}>
        <FormControl sx={{ m: 1, width: '70%' }} variant="outlined">
        <InputLabel htmlFor="standard-adornment-password">Nueva contraseña</InputLabel>
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
          />
          </FormControl>

        <FormControl sx={{ m: 1, width: '70%' }} variant="outlined">

        <InputLabel htmlFor="standard-adornment-password2">Contraseña</InputLabel>
          <Input
            id="standard-adornment-password2"
            type=  'password'
            value={confirmpassword}
            onChange={handleChange2}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility2"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {confirmpassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />   
 
          </FormControl>
          <div className={password.btnn}>
          <Grid className="formbutton" item md={12}>
                    <Button className="button-primary" disabled>
                    Crear contraseña
                    </Button>
                  </Grid>
                  </div>
              </div>
              </div>
              </div>
              </Container>
  </>
  );
}

export default Password;