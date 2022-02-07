import React from 'react';
import StickyHeadTable from '../../components/Myinvestment-detail/Investment-table';
import { Button, Container, Grid, Typography } from '@mui/material';
import MytransactionsStyled from './Mytransactions.module.scss'
import { Link } from 'react-router-dom';

function Mytransactions() {
  return (
  <div>
    <div className={MytransactionsStyled.top_banner}>
      <Container maxWidth="lg">
                <Grid style={{ paddingLeft: "0px" }} item xs={12}>
                        <div
                            style={{ justifyContent: "start" }}
                            className={MytransactionsStyled.heading}
                        >
                            <img src="/assets/images/product_rect.png" alt=""></img>
                            <Typography
                            className="font-lg-28 museo-regular"
                            variant=""
                            component=""
                            >
                            Mis transacciones
                            </Typography>
                        </div>
                </Grid>

    <Grid container spacing={4}>
        <Grid item xs={12}>
            <div className={MytransactionsStyled.cardstyle}>
      <StickyHeadTable />
      </div>
      <Grid className={MytransactionsStyled.btn} item xs={12} item md={12}>
      <Link to="/codeverification">
              <Button className="button-primary">
              Volver al Inicio
               </Button> 
        </Link>
        </Grid>


      </Grid>
     </Grid>

      </Container>
      </div>
  </div>
  );
}

export default Mytransactions;
