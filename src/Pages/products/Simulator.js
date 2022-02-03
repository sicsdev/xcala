import React from 'react';
import "react-phone-number-input/style.css";
import simulatorstyle from './Simulator.module.scss'
import { Grid, TextField, Select, Checkbox, Button, InputLabel, Input, MenuItem, Typography, } from "@mui/material";
import { useState } from 'react';
import DoneIcon from "@mui/icons-material/Done";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { IconButton,Tooltip} from '@mui/material';
import Simulatorresult from './Simulator-result';


function Simulator() {

const [name, setName] = useState('');
const [helpermsg, setHelpermsg] = useState({namehelpermsg: "", namehelpermsgcolor: false,});
const [amount, setAmount] = React.useState('');
const [optionalamount, setOptionalamount] = React.useState('');
const [investment, setInvestment ] = React.useState([0]);

const onnamechange = (e) => {
    setName(e.target.value);
    if (name.length >= 2) {
      setHelpermsg((nametext) => {
        return {
          ...nametext,
          namehelpermsg: "Ver otros fondos",
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
   
const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeoptional = (event) => {
    setOptionalamount(event.target.value);
  };


  const estimate = (event) => {
    setInvestment(event.target.value);
  };



  return (
  <>
   <div className={simulatorstyle.simulate}>
         <Grid className={simulatorstyle.container} container bgcolor={"#fff"} maxWidth="sm" spacing={2}>
            <Grid style={{paddingLeft:"0px"}} item xs={12}>
                <div style={{justifyContent:"start"}} className={simulatorstyle.heading} >
                  <img src="/assets/images/Rectangle.png" alt=""></img>
                  <Typography className="font-lg-24 museo-regular" variant="" component="">
                  Simula tu inversión
                  </Typography>
                </div>
            </Grid>

            <form>
                <div className={simulatorstyle.register_input_text}>
                    <div class={simulatorstyle.form_inputs}>
                    <FormControl fullWidth variant="standard">
                      <TextField
                        className={
                          helpermsg.namehelpermsgcolor
                            ? simulatorstyle.textfieldcolorrrr
                            : ""
                        }
                        fullWidth
                        onChange={onnamechange}
                        id="standard-basic"
                        label="Fondo"
                        variant="standard"
                        type="text"
                        FormHelperTextProps={{
                          className: simulatorstyle.helperTextcolor || "",
                        }}
                        helperText={helpermsg.namehelpermsg}
                      />
                      </FormControl>
                </div>

                <div class={simulatorstyle.form_inputs}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Inversión Inicial</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={amount}
                            onChange={handleChange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />  </FormControl>
                        <div className={simulatorstyle.text}>
                            <Typography className={simulatorstyle.fadetext} variant="" component="">
                            Disclaimer la rentabilidad calculada en la moneda de origen del fondo.
                            </Typography>
                        </div>
                  
                </div>    

                <div class={simulatorstyle.form_inputs}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Aporte Mensual (Opcional)                        
                            <Tooltip title="icon">
                                <IconButton>
                                 <img src="/assets/images/i_icon.svg"></img>
                                </IconButton>
                            </Tooltip>
                        </InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={optionalamount}
                            onChange={handleChangeoptional}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />


                    </FormControl> 
                </div> 

                <div class={simulatorstyle.form_inputs}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">Plazo estimado de inversión (Horizonte)</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={investment}
                        onChange={estimate}
                        label="Age"
                        >
                        <MenuItem value={0}>2 años</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                    <Grid className={simulatorstyle.btn} item md={12}>
                      <Button className="button-primary" disabled>
                      Calcular
                      </Button> 
                    </Grid>
                </div>
            </form>
        </Grid>


    </div> 
    <div className={simulatorstyle.simulate}>
    <Simulatorresult/>
    </div>

  </>
  );
}
export default Simulator;
