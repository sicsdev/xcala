import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import Xcalalogo from "../Xcalalogo";
import codeverificationstyle from "./Codeverification.module.scss";
import Backgroundscreen from "../../Backgroundscreen";
import OTPInput, { ResendOTP } from "otp-input-react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

//custom otp button
// const renderButton = (buttonProps) => {
//   return <Button variant="outlined" startIcon={<MailOutlineIcon />} {...buttonProps}>Reenviar código</Button>;
// };
// const renderTime = (remainingTime) => {
//   return <span>{remainingTime} seconds remaining</span>;
// };

function Codeverification() {
  const [OTP, setOTP] = useState("");
  return (
    <>
      <Backgroundscreen />
      <Container maxWidth="sm">
          <Xcalalogo />
          <Grid item md={12} mb={3}>
            <div className={codeverificationstyle.rectangle_heading}>
              <img src="/assets/images/Rectangle.png" alt=""></img>
              <p>Valida tu cuenta</p>
            </div>
          </Grid>
        <div className={codeverificationstyle.otpverification}>
          <div className={codeverificationstyle.text}>
            <p>
              Ingresa el código de verificación que enviamos al correo
              mar...@gmail.com
            </p>
          </div>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            secure
          />
          <div className={codeverificationstyle.fadetext}>
            <p>
              ¿No has recibido nuestro correo? ¿Revisaste tu spam? Puede que
              hayamos llegado allá...{" "}
            </p>
          </div>
          <div>
            {/* <ResendOTP className={codeverificationstyle.otpbutton} onResendClick={() => console.log("Resend clicked")} /> */}
            {/* <ResendOTP renderButton={renderButton} /> */}
            <Button className={codeverificationstyle.otpbutton} variant="outlined" startIcon={<MailOutlineIcon />}>Reenviar código</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Codeverification;
