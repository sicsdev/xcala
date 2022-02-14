import React from 'react';
import Styles from "../../../Pages/objectives-interests/Objectives-Interests.module.scss"
import Typography from '@mui/material/Typography';
import {Grid } from "@mui/material";
import Icondd from '../../icons/Icondd';

function StepThreeCard(props) {

  return (
    <>
      <div className={Styles.card_objective}>
        <Grid container maxWidth="sm">
          <Grid item md={2}>
            <span className="card-icon">
              {/* {props.icon} */}
              <Icondd icon = {props.icon}/>
            </span>
          </Grid>
          <Grid item md={8}>
            <Typography
              className='light-blue fw-600 font-lg-18'
            >
              {props.heading}
            </Typography>
          </Grid>
          <Grid item md={2} style={{ textAlign: "right" }}>
            <span className={Styles.checkbox}>
              {props.checkbox}
            </span>
          </Grid>
        </Grid >
      </div>
    </>
  );
}

export default StepThreeCard;
