import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import productgraphstyles from './Productgraph.module.scss'
import { Link } from 'react-router-dom';
import Charts from './Chart';

function productgraph() {
  return (
    <div className={productgraphstyles.center}>
      <Card className={productgraphstyles.cardstyle} sx={{ maxWidth: 445, borderRadius: 4 }}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className={productgraphstyles.card_h1}>
                <img src="/assets/images/polygon.png" alt="d"></img>
                <Typography className={productgraphstyles.h1} variant="" component="">
                  Xcala Balanceado Global
                </Typography>
              </div>
              <span className={productgraphstyles.star_tag}>
                <img src="/assets/images/start_tag.svg" alt='d'></img>
              </span>

              <div className={productgraphstyles.link}>
                <Link to="" className={productgraphstyles.link1}>Generar ingresos</Link>
                <Link to="" className={productgraphstyles.link2}>Medioambiente</Link>
              </div>
              <span className={productgraphstyles.detail} style={{ padding: "15px 0", display: "block" }}>
                <Typography className='font-lg-20 fw-600 dark-grey' >Rentabilidad +4,18%</Typography>
                <Typography className='font-lg-20 dark-grey' >(últimos 12 meses)  </Typography>
              </span>
              {/* chart */}
              <Charts productdetail={"products"} />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid item xs={12} md={12}>
            <div className={`formbutton ${productgraphstyles.product_action_btn}`}>
              <Link to="" className="button-primary" >
                Invertir
              </Link>
              <Link to="/product-detail" className="light-button-primary">
                Más información
              </Link>
            </div>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default productgraph;
