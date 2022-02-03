import React, { useState } from 'react';
import Styled from "../../../Pages/complete-registration/Complete-Registration.module.scss";
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import { Button, Checkbox, Grid } from "@mui/material";
import DialogBox from '../../UI/modal';
function StepTwoForm({ setstepper, setSteppercolor, props }) {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenTwo = () => {
    setOpenTwo(true);
  };
  const handleClickOpenThree = () => {
    setOpenThree(true);
  };
  const handleClickOpenFour = () => {
    setOpenFour(true);
  };
  const handleClickOpenFive = () => {
    setOpenFive(true);
  };
  const thirdStep = () => {
    setstepper(3)
    setSteppercolor(first => {
      return {
        ...first,
        comp3: true,
      }
    })
  }
  const pepModal = {
    title :"¿Eres una persona expuesta políticamente?",
    content :"El término PEP (Personas Expuestas Políticamente) designa a los chilenos o extranjeros que desempeñan o hayan desempeñado funciones públicas destacadas en un país, hasta a lo menos un año de finalizado el ejercicio de las mismas. <span class='break_content'></span>Se incluyen en esta categoría a jefes de Estado o de un Gobierno, políticos de lata jerarquía, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos de empresas estatales, así como sus cónyuges, sus parientes hasta el segundo grado de consanguinidad, y las personas naturales con las que hayan celebrado un pacto de actuación conjunta, mediante el cual tengan poder de voto suficiente para influir en sociedades constituidas de Chile.<span class='break_content'></span>S La vinculación con un PEP considera al cónyuge o parientes de este hasta el segundo grado de consanguinidad, es decir, abuelo(a), padre, madre, hijo(a), nieto(a).",
    btnContent :"Entendido"
  };
  const usCitizen = {
    title :"¿Eres ciudadano norteamericano?",
    content :"Persona Estadounidense: El término Persona Estadounidense (U.S. Person en inglés) aplica a ciudadanos americanos aún cuando no residan en Estados Unidos.<ul><li>Ciudadanos americanos que no residan en Estados Unidos. </li><li> Residentes de Estados Unidos. Es decir, por ejemplo, en los últimos 12 meses más de 183 días en Estados Unidos.</li><li>Personas con pasaporte americano.</li><li>Nacidos en Estados Unidos, salvo renuncia a la nacionalidad. </li><li>Residentes permanentes en Estados Unidos (Titular de Green Card). </li><li> Tener asociada a su cuenta bancaria una dirección en Estados Unidos.</li><li>Órdenes de transferencia periódicas a una cuenta estadounidense o que las ordenes se reciban desde una dirección de Estados Unidos. </li></ul>",
    btnContent :"Entendido"
  };
  const relationXcala = {
    title :"¿Tienes alguna relación con Xcala?",
    content :"Se considera que una persona naturla tiene relación con Xcala en el caso de ser un Director, Gerente, Administrador, Ejecutivos principales o Liquidadores de esta sociedad o bien de tener una relación de parentesco con uno de ellos.<span class='break_content'></span> La vinculación con los cargos mencionados considera al cónyuge o parientes hasta el segundo grado de consanguinidad. Es decir, abuelo(a), padre, madre, hijo(a), hermano(a), nieto(a).",
    btnContent :"Entendido"
  };
  const dualNationality = {
    title :"¿Tienes doble nacionalidad?",
    content :"La doble nacionalidad es el estatus juridico que disfrutan ciertos individuos, al ser reconocidos como nacionales simultáneamente por dos estados.",
    btnContent :"Entendido"
  };
  const payTax = {
    title :"¿Tributas en otro país?",
    content :"La residencia tributaria designa el país donde una persona natural o entidad es considerada como residente o contribuyente para efectos tributarios de dicha jurisdicción.<span class='break_content'></span> Si tienes dudas respecto de si puedes ser considerado o no como persona natural con residencia tributaria en otros paises, consultar aquí, donde encontrarás la definición de residencia tributaria proporciada por los países participantes.",
    btnContent :"Entendido"
  };
  return (
    <>

      <div className={Styled.special_condition}>
        <Grid container maxWidth="sm">
          <Grid item md={12} mt={1}>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "flex-start",
              }}
            >
              <Checkbox />
              <div className={Styled.condition_text}>
                <Typography>
                  Declaro que soy una {''}
                  <span className={Styled.bold_text}>
                    Persona Políticamente Expuesta (PEP)
                  </span>
                  <HelpIcon onClick={handleClickOpen} />
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid >
        <Grid container maxWidth="sm">
          <Grid item md={12} mt={1}>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "flex-start",
              }}
            >
              <Checkbox />
              <div className={Styled.condition_text}>
                <Typography>
                  Declaro ser {''}
                  <span className={Styled.bold_text}>
                    ciudadano norteamericano
                  </span>
                  <HelpIcon onClick={handleClickOpenTwo}  />
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid >
        <Grid container maxWidth="sm">
          <Grid item md={12} mt={1}>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "flex-start",
              }}
            >
              <Checkbox />
              <div className={Styled.condition_text}>
                <Typography>
                  Declaro tener una relación de  {''}
                  <span className={Styled.bold_text}>
                    trabajo con Xcala
                  </span>
                  <HelpIcon onClick={handleClickOpenThree} />
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid >
        <Grid container maxWidth="sm">
          <Grid item md={12} mt={1}>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "flex-start",
              }}
            >
              <Checkbox />
              <div className={Styled.condition_text}>
                <Typography>
                  Declaro tener {''}
                  <span className={Styled.bold_text}>
                    doble nacionalidad
                  </span>
                  <HelpIcon onClick={handleClickOpenFour}/>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid >
        <Grid container maxWidth="sm">
          <Grid item md={12} mt={1}>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "flex-start",
              }}
            >
              <Checkbox />
              <div className={Styled.condition_text}>
                <Typography>
                  Declaro {''}
                  <span className={Styled.bold_text}>
                    tributar en otro país
                  </span>
                  <HelpIcon onClick={handleClickOpenFive}/>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid >
        <Grid container spacing={3} mt={1}>
          <Grid className="formbutton" item md={6}>
              <Button className="button-primary" style={{ background: "#F4F4FB", color: "#1E22AA", fontWeight: "600", }}>
                Cancelar
              </Button>
          </Grid>
          <Grid className="formbutton" item md={6}>
            <Button className="button-primary" onClick={thirdStep}>
              Continuar
            </Button>
          </Grid>
        </Grid>
      </div>
      <DialogBox setOpen={setOpen} open={open} modal_title={pepModal.title} modal_content={pepModal.content} action_btn={pepModal.btnContent} />
      <DialogBox setOpen={setOpenTwo} open={openTwo} modal_title={usCitizen.title} modal_content={usCitizen.content} action_btn={usCitizen.btnContent} />
      <DialogBox setOpen={setOpenThree} open={openThree} modal_title={relationXcala.title} modal_content={relationXcala.content} action_btn={relationXcala.btnContent} />
      <DialogBox setOpen={setOpenFour} open={openFour} modal_title={dualNationality.title} modal_content={dualNationality.content} action_btn={dualNationality.btnContent} />
      <DialogBox setOpen={setOpenFive} open={openFive} modal_title={payTax.title} modal_content={payTax.content} action_btn={payTax.btnContent} />
    </>
  );
}

export default StepTwoForm;
