import React from 'react';
import Styles from "../profile/Profile.module.scss"
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import CustomizedAccordions from '../../UI/accordion';
import { Grid, TextField, Select, Checkbox, Button } from "@mui/material";
function Profile() {
  return (
    <div className={Styles.page_content}>
      <Container maxWidth="sm">
        <Grid container maxWidth="sm" spacing={2}>
          <Grid item md={12} mb={3}>
            <div className={Styles.rectangle_heading}>

              <Typography
                variant="h4"
              >
                <img src="/assets/images/Rectangle.png" alt=""></img>  Define tu perfil inversionista
              </Typography>
            </div>
          </Grid>
          <Grid item md={12} mt={3}>
            <div className={Styles.rectangle_heading}>
              <Typography
                variant="h6"
              >
                El perfil de riesgo refleja tu capacidad de tolerar una pérdida, y nos servirá para hacerte una mejor propuesta de inversión.
              </Typography>
              <Typography
                variant="p"
                mt={5}
              >
                Puedes volver a realizar el cuestionario en cualquier momento dentro de Xcala.
              </Typography>

            </div>

          </Grid>
          <Grid item md={12} mt={3}>
            <CustomizedAccordions />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Profile;
