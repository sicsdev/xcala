import React,{useContext} from 'react';
import Container from "@mui/material/Container";
import { Grid, Button, FormControl  } from "@mui/material";
import "react-phone-number-input/style.css";
import Xcalalogo from "../Xcalalogo";
import Backgroundscreen from "../../Backgroundscreen";
import loginstyles from "./Login.module.scss"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';

function Login() {
    const [values, setValues] = React.useState({
        password: '',
        sergfgh:"",
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
    <Backgroundscreen/>
        <Container maxWidth="sm">
            <Xcalalogo/>
            <div className={loginstyles.form_login}>
            <div className={loginstyles.form_inner}>
            <Grid container maxWidth="sm">
                <form>
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
            <Typography className={loginstyles.p_14} variant="" component="">
            ¿Olvidaste tu contraseña?
             </Typography>
        </div>
                </form>
             </Grid>
          <Grid className="formbutton" item md={12}>
                    <Button className="button-primary">
                    Ingresar
                    </Button>

                    <div className={loginstyles.btn_text}>
                     <Typography variant="" component="">
                     ¿Aún no estás registrado?
                      </Typography>  
                      </div>
          </Grid>
          </div>
          </div>
        </Container>  
           
  </>
  );
}

export default Login;
