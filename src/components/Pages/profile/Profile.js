import React from 'react';
import Styles from "../profile/Profile.module.scss"
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import CustomizedAccordions from '../../UI/accordion';
import { Grid, TextField, Select, Checkbox, Button } from "@mui/material";
import { fontWeight } from '@mui/system';
const accordion_body_content = "Prefieres tener inversiones con un nivel de riesgo menor, es decir invertir el 100% de tu dinero en instrumentos más seguros aunque de menor rendimiento."
function Profile() {
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
                style={{ fontSize: "32px" }}
              >
                <img src="/assets/images/Rectangle.png" alt=""></img>  Define tu perfil inversionista
              </Typography>
            </div>
          </Grid>
          <Grid item md={12} mt={3}>
            <div className={Styles.rectangle_heading}>
              <Typography
                variant="h6"
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
          <Grid item md={9} mt={3} style={{ textAlign: "center", margin: "20px auto" }}>
            <Typography
              variant="h5"
              className='font-lg-18'
              style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
            >
              ¿Conoces tu perfil inversionista?
            </Typography>

            <CustomizedAccordions accordion_head_img="/assets/images/Iconos-Perfiles.svg" head_content="Conservador" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />

            <CustomizedAccordions accordion_head_img="/assets/images/cycle.svg" head_content="Moderado" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />

            <CustomizedAccordions accordion_head_img="/assets/images/walk.svg" head_content="Agresivo" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />

            <CustomizedAccordions className="size-accordion" accordion_head_img="/assets/images/help_outline.svg" head_content="No estoy seguro, descubrir mi perfil" accordion_body_heading="Perfil Conservador" accordion_body_content={accordion_body_content} accordion_body_btn_label="Es mi perfil" />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Profile;
