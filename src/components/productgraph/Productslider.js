import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material';
import Productgraph from './Productgraph';


function Productslider() {

       return (
              <div style={{ marginBottom: "3rem" }}>
                     <Carousel navButtonsAlwaysInvisible>
                            <div>
                                   <Grid container spacing={3}>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                   </Grid>
                            </div>
                            <div>
                                   <Grid container spacing={3}>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                   </Grid>
                            </div>
                            <div>
                                   <Grid container spacing={3}>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                          <Grid item xs={12} md={4}>
                                                 <Productgraph />
                                          </Grid>
                                   </Grid>
                            </div>
                     </Carousel>


              </div>
       );
}

export default Productslider;
