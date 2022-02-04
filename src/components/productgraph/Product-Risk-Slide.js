import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material';
import Productgraph from './Productgraph';


function ProductRiskSlider() {

       return (
              <div style={{ marginBottom: "3rem" }}>
                     <Carousel navButtonsAlwaysInvisible>
                            <Grid container spacing={3}>
                                   <Grid item xs={6}>
                                          <Productgraph />
                                   </Grid>
                                   <Grid item xs={6}>
                                          <Productgraph />
                                   </Grid>

                            </Grid>
                            <Grid container spacing={3}>
                                   <Grid item xs={6}>
                                          <Productgraph />
                                   </Grid>
                                   <Grid item xs={6}>
                                          <Productgraph />
                                   </Grid>

                            </Grid>
                            <Grid container spacing={3}>
                                   <Grid item xs={6}>
                                          <Productgraph />
                                   </Grid>
                                   <Grid item xs={6}>
                                          <Productgraph />
                                   </Grid>

                            </Grid>
                     </Carousel>
              </div>
       );
}

export default ProductRiskSlider;
