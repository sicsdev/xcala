import { Checkbox, Container, Grid, Radio, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import Styled from "../confirm-request/Confirm-Request.module.scss"
import InfoIcon from '@mui/icons-material/Info';
import Productdetailconditions from '../../components/productgraph/Productdetailconditions'
import Customselect from '../../components/UI/select';
import ReceivedRequest from '../received-request/Received-Request';
function ConfirmRequest() {
  const [selectedValue, setSelectedValue] = useState('a');
  const [bankdetail, setbankdetail] = useState(false);
  const [receivedRequest, setreceivedRequest] = useState(true);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    const bank = event.target.value;
    if (bank === 'bank') {
      setbankdetail(true)
    }
    else {
      setbankdetail(false)
    }
  };
  const OpenreceviedRequest = () => {
    setreceivedRequest((prevState => !prevState));
  };

  return <>
    {receivedRequest ?
      <div className='grey-bg'>
        <div className={Styled.complete_registraion_main}>
          <Container sx={{ maxWidth: "701px!important" }}>
            <Typography
              className='museo-regular font-lg-24'
            >
              <img src="/assets/images/Rectangle.png" alt=""></img>  Confirma tu solicitud
            </Typography>
            <div className={Styled.registration_wrapper}>
              <Grid container className={Styled.registration_first_step}>
                <Grid item md={12} mb={3}>
                  <div className={Styled.rectangle_heading}>
                    <Typography mt={4} className='font-lg-18'>
                      Fondo
                    </Typography>
                    <Typography className='font-lg-24 fw-600'   >
                      Xcala Deuda Privada Global
                    </Typography>
                  </div>
                  <div className={Styled.identity}>
                    <InfoIcon />
                    <div className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='light-grey'>
                        Para proceder concretar tu solicitud deberás depositar el monto a invertir en la cuenta que te informaremos en el siguiente paso.
                      </Typography>
                    </div>
                  </div>
                  <Typography mt={4} className='font-lg-18 blue_text'>
                    Monto de inversión
                  </Typography>
                  <Typography className='font-lg-24 fw-600 blue_text'>
                    USD$ 6.600 / $ 5.346.000*
                  </Typography>
                  <Typography className=' light-grey'>
                    *Tipo de cambio al 30/10/21 = $810
                  </Typography>

                </Grid>

                <Grid item md={12} mt={2}>
                  <Productdetailconditions />
                </Grid>
                <Grid item md={12} mt={2}>
                  <Typography mt={4} className='font-lg-18 blue_text'>
                    Este fondo genera dividendos mensuales.
                  </Typography>
                  <Typography>
                    ¿Qué quieres hacer con estos dividendos?
                  </Typography>
                </Grid>
                <Grid item md={12} mt={2}>
                  <div className={Styled.identity_radio}>
                    <Radio checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                    />
                    <div className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='light-grey'>
                        Reinvertir ganancias en este fondo
                      </Typography>
                    </div>
                  </div>
                  <div className={Styled.identity_radio}>
                    <Radio checked={selectedValue === 'bank'}
                      onChange={handleChange}
                      value="bank"
                      name="radio-buttons"
                      id=''
                    />
                    <div className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='light-grey'>
                        Reinvertir ganancias en este fondo
                      </Typography>
                    </div>
                  </div>
                  {bankdetail ?
                    <>
                      <div className={Styled.fields}>
                        <Customselect
                          label="Banco"
                          Labelid="Banco"
                          placholder="Banco"
                          Selectid="Banco"
                          id="bank-name"
                        />
                      </div>
                      <div className={Styled.fields}>
                        <TextField
                          fullWidth
                          id="bank-no"
                          label="Tipo de cuenta"
                          variant="standard"
                          type="text"
                          name="Tipo de cuenta"
                        />
                      </div>
                      <div className={Styled.fields}>
                        <TextField
                          fullWidth
                          id="bank-no"
                          label="No. de cuenta"
                          variant="standard"
                          type="number"
                          name="111111111111111111"
                        />
                      </div>
                    </>
                    : ''
                  }
                </Grid>

                <div className={Styled.line}></div>
                <Grid item md={12} mt={2}>
                  <div className={Styled.identity_radio}>
                    <Checkbox />
                    <div className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='light-grey'>
                        Declaro entender que la inversión que estoy realizando es de un riesgo superior a lo sugerido por mi perfil inversionista.
                      </Typography>
                    </div>
                  </div>
                  <div className={Styled.identity_radio}>
                    <Checkbox />
                    <div className={Styled.p1}
                      style={{ paddingLeft: "10px" }}
                    >
                      <Typography className='light-grey'>
                        Acepto que esta transacción se rigen bajo las normas del<span className='dark-green fw-600'> contrato vigente.</span>
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} xs={12} mt={2}>
                  <div className={Styled.continue_btn}>
                    <Button className="light-button-primary" >No por ahora</Button>
                  </div>
                </Grid>
                <Grid item md={6} xs={12} mt={2}>
                  <div className={Styled.continue_btn}>
                    <Button className="button-primary" onClick={OpenreceviedRequest}>Confirmar solicitud de inversión</Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
      :
      <ReceivedRequest />
    }
  </>
}

export default ConfirmRequest;
