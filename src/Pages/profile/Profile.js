import React, { useState } from 'react';
import Styles from "../profile/Profile.module.scss"
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import CustomizedAccordions from '../../components/UI/accordion';
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogBox from '../../components/UI/modal';
const accordion_body_content = "Prefieres tener inversiones con un nivel de riesgo menor, es decir invertir el 100% de tu dinero en instrumentos más seguros aunque de menor rendimiento."

function Profile(props) {
  const pepModal = {
    className :"profile-tab-popup",
    title :"Antes de continuar...",
    content :"Declaro entender y aceptar lo que implica identificarse con ese perfil de riesgo",
    btnContent :"Entendido",
    btnContent2 :"Cancelar"
  };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/lets-start");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="page_content">
      <Container sx={{
        maxWidth: "674px !important",
      }}>
        <Grid container maxWidth="sm" spacing={2}>
          <Grid item md={12} mb={3}>
            <div className={Styles.rectangle_heading}>
              <Typography
                variant="h5"
                className='font-lg-32'
              >
                <img src="/assets/images/Rectangle.png" alt=""></img>  Define tu perfil inversionista
              </Typography>
            </div>
          </Grid>
          <Grid item md={12} mt={3} className={Styles.tab_content_main}>
            <div className={Styles.rectangle_heading}>
              <Typography
                className='font-lg-18'
                style={{ color: '#182849', marginBottom: "15px" }}
              >
                El perfil de riesgo refleja tu capacidad de tolerar una pérdida, y nos servirá para hacerte una mejor propuesta de inversión.
              </Typography>
              <Typography
                variant="p"
                className='font-lg-18'
                style={{ color: '#818181', marginTop: "15px" }}
              >
                Puedes volver a realizar el cuestionario en cualquier momento dentro de Xcala.
              </Typography>

            </div>

          </Grid>
          <Grid item md={9} mt={3} className={Styles.tabs_wrapper} style={{ margin: "20px auto" }}>
            <Typography
              variant="h5"
              className='font-lg-18 p-color1 fw-600'
            >
              ¿Conoces tu perfil inversionista?
            </Typography>

            <CustomizedAccordions  openPopUp={handleClickOpen} className='profile-tabs-accordion' accordion_head_img="/assets/images/Iconos-Perfiles.svg" head_content="Conservador" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />

            <CustomizedAccordions  openPopUp={handleClickOpen} className='profile-tabs-accordion' accordion_head_img="/assets/images/cycle.svg" head_content="Moderado" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />

            <CustomizedAccordions  openPopUp={handleClickOpen} className='profile-tabs-accordion' accordion_head_img="/assets/images/walk.svg" head_content="Agresivo" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />

            <CustomizedAccordions  openPopUp={handleClickOpen} handleClick={handleClick} className="profile-tabs-accordion size-accordion" accordion_head_img="/assets/images/help_outline.svg" head_content="No estoy seguro, descubrir mi perfil" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />
          </Grid>
        </Grid>

      </Container>
      <DialogBox setOpen={setOpen} open={open} class={pepModal.className} modal_title={pepModal.title} modal_content={pepModal.content} action_btn2={pepModal.btnContent2} action_btn={pepModal.btnContent}  />

    </div>
  );
}

export default Profile;
