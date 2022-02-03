import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import productgraphstyles from './Productgraph.module.scss'
import { Link } from 'react-router-dom';
import Charts from './Chart';
import { display } from '@mui/system';

function productgraph() {
  return (
    <div className={productgraphstyles.center}>
      <Card className={productgraphstyles.cardstyle} sx={{ maxWidth: 445, borderRadius: 4, padding: 3 }}>
        <CardContent>
          <Grid container maxWidth="sm" spacing={2}>
            <Grid item md={12} mb={3}>
              <div className={productgraphstyles.card_h1}>
                <img src="/assets/images/polygon.png" alt=""></img>
                <Typography className={productgraphstyles.h1} variant="" component="">
                  Xcala Balanceado Global
                </Typography>
              </div>
              <span className={productgraphstyles.star_tag}>
                <img src="/assets/images/start_tag.svg"></img>
              </span>

              <div className={productgraphstyles.link}>
                <Link className={productgraphstyles.link1} to="">Generar ingresos</Link>
                <Link className={productgraphstyles.link2} to="">Medioambiente</Link>
              </div>
              <span className={productgraphstyles.detail} style={{ padding: "15px 0", display: "block" }}>
                <Typography className='font-lg-20 fw-600 dark-grey' >Rentabilidad +4,18%</Typography>
                <Typography className='font-lg-20 dark-grey' >(últimos 12 meses)  </Typography>
              </span>
              {/* chart */}
              <Charts  productdetail = {"products"}/>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid className="formbutton" item md={12}>
            <Button style={{ marginTop: "0px", width: "100%" }} className="button-primary">
              Invertir
            </Button>
            <Button style={{ width: "100%", background: "#F4F4FB", color: "#1E22AA", fontWeight: "600", marginTop: "0" }} className="button-primary">
              Más información
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default productgraph;
