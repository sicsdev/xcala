import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import Xcalalogo from "../../components/UI/Xcalalogo";
import codeverificationstyle from "./Codeverification.module.scss";
import Backgroundscreen from "../../components/UI/Backgroundscreen";
import OTPInput, { ResendOTP } from "otp-input-react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//custom otp button
// const renderButton = (buttonProps) => {
//   return <Button variant="outlined" startIcon={<MailOutlineIcon />} {...buttonProps}>Reenviar código</Button>;
// };
// const renderTime = (remainingTime) => {
//   return <span>{remainingTime} seconds remaining</span>;
// };

function Codeverification() {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const gotoNextPage = () => {
    navigate("/password");
  };
  return (
    <>
      <Backgroundscreen />
      <Container sx={{
        maxWidth: "674px !important"
      }}>
        <Grid container maxWidth="sm" spacing={2}>
          <Grid item xs={12} md={12} mb={3}>
            <Xcalalogo />
          </Grid>
          <Grid item md={12} mb={4}>
            <div className="h2">
              <img src="/assets/images/Rectangle.png" alt=""></img>
              <Typography className="h2 museo-regular" variant="" component="">
                Valida tu cuenta
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={codeverificationstyle.otpverification}>
          <div className={codeverificationstyle.text}>
            <Typography className={codeverificationstyle.p_18} variant="" component="">
              Ingresa el código de verificación que enviamos al correo
              mar...@gmail.com
            </Typography>
          </div>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            // autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
          />
          <div className={codeverificationstyle.fadetext}>
            <Typography className={codeverificationstyle.bottom_text} variant="" component="">
              ¿No has recibido nuestro correo? ¿Revisaste tu spam? Puede que
              hayamos llegado allá...
            </Typography>
          </div>
          <div className={codeverificationstyle.otpbutton_main}>
            {/* <ResendOTP className={codeverificationstyle.otpbutton} onResendClick={() => console.log("Resend clicked")} /> */}
            {/* <ResendOTP renderButton={renderButton} /> */}
            {/* <Button className={codeverificationstyle.otpbutton} variant="outlined" startIcon={<MailOutlineIcon />}>Reenviar código</Button> */}
            <Button    onClick={gotoNextPage} className={codeverificationstyle.otpbutton} variant="outlined" startIcon={<MailOutlineIcon />}>
              Reenviar código
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Codeverification;
