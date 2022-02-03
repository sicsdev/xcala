import React from 'react';
import { Button, Checkbox, Grid, TextField } from "@mui/material";
import Styled from "../../../Pages/complete-registration/Complete-Registration.module.scss";
import Customselect from '../../UI/select';
function StepOneForm({ setstepper, setSteppercolor }) {
  const secondStep = () => {
    setstepper(2)
    setSteppercolor(first => {
      return {
        ...first,
        comp1: true,
        comp2: true
      }
    })
  }
  return (
    <>
      <div className={Styled.card_objective}>
        <Grid container maxWidth="sm">
          <form>
            <div className={Styled.register_input_text}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nombre"
                variant="standard"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Género"
                Labelid="Género"
                placholder="Género"
                Selectid="Género"
                id="bank-name"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Nacionalidad"
                Labelid="Nacionalidad"
                placholder="Nacionalidad"
                Selectid="Nacionalidad"
                id="Nacionalidad"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Ciudad"
                Labelid="Ciudad"
                placholder="Ciudad"
                Selectid="Ciudad"
                id="Ciudad"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Comuna"
                Labelid="Comuna"
                placholder="Comuna"
                Selectid="Comuna"
                id="Comuna"
              />
            </div>
            <div className={Styled.register_input_text}>
              <TextField
                fullWidth
                id="Calle"
                label="Calle"
                variant="standard"
                type="text"
              />
            </div>
            <div className={Styled.register_input_half}>
              <TextField
                fullWidth
                id="Apellido-paterno"
                label="Apellido paterno"
                variant="standard"
                type="text"

              />
            </div>
            <div className={Styled.register_input_half}>
              <TextField
                fullWidth
                id="Casa-Dpto."
                label="Casa/Dpto."
                variant="standard"
                type="text"

              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Estado Civil"
                Labelid="Estado Civil"
                placholder="Estado Civil"
                Selectid="Estado Civil"
                id="Estado Civil"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Profesión, ocupación u oficio"
                Labelid="Profesión, ocupación u oficio"
                placholder="Profesión, ocupación u oficio"
                Selectid="Profesión, ocupación u oficio"
                id="Profesión, ocupación u oficio"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Rango de ingresos"
                Labelid="Rango de ingresos"
                placholder="Rango de ingresos"
                Selectid="Rango de ingresos"
                id="Rango de ingresos"
              />
            </div>
            <div className={Styled.register_input_text}>
              <Customselect
                label="Origen de los fondos"
                Labelid="Origen de los fondos"
                placholder="Origen de los fondos"
                Selectid="Origen de los fondos"
                id="Origen de los fondos"
              />
            </div>

            <div className={Styled.register_input_text}>
              <div
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <Checkbox />
                <div className="p1" style={{ paddingLeft: "10px" }}>
                  <p className="p-16">
                    Declaro hacer uso de los{" "}
                    <span className={Styled.greentext}>
                      fondos asociados a mi patrimonio reservado
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid className="formbutton" item md={6}>
                <Button className="button-primary" style={{ background: "#F4F4FB", color: "#1E22AA", fontWeight: "600", }}>
                  Cancelar
                </Button>
              </Grid>
              <Grid className="formbutton" item md={6}>
                <Button className="button-primary" onClick={secondStep}>
                  Continuar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    </>
  );
}

export default StepOneForm;
