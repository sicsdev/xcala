import React from 'react';
import { Grid, Link } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import productgraphstyles from './Productgraph.module.scss'
// import { Link } from 'react-router-dom';
import Charts from './Chart';

function productgraph() {
  return (
    <div className={productgraphstyles.center}>
      <Card className={productgraphstyles.cardstyle} sx={{ maxWidth: 445, borderRadius: 4, padding: 3 }}>
        <CardContent>
          <Grid container maxWidth="sm" spacing={2}>
            <Grid item md={12} mb={3}>
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
                <Link className={productgraphstyles.link1} to="">Generar ingresos</Link>
                <Link className={productgraphstyles.link2} to="">Medioambiente</Link>
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
          <Grid className="formbutton" item md={12}>
            <Button className="button-primary" style={{width:"100%"}}>
              Invertir
            </Button>
            <Button className="light-button-primary" style={{width:"100%"}}>
              Más información
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default productgraph;
