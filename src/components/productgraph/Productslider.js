import React from 'react';
import { Grid } from '@mui/material';
import Productgraph from './Productgraph';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";

function Productslider() {
       const responsive = {
              desktop: {
                     breakpoint: { max: 3000, min: 1024 },
                     items: 3,
                     partialVisibilityGutter: 40 ,
                     slidesToSlide: 3 // optional, default to 1.
              },
              tablet: {
                     breakpoint: { max: 1024, min: 464 },
                     items: 2,
                     slidesToSlide: 2,
                     partialVisibilityGutter: 40  // optional, default to 1.
              },
              mobile: {
                     breakpoint: { max: 464, min: 0 },
                     items: 1,
                     slidesToSlide: 1 // optional, default to 1.
              }
       };
       return (
              <div style={{ marginBottom: "3rem" }}>
                     <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} autoPlay={true} transitionDuration={500} partialVisible={true}>
                            <div className='product_slider'>
                                   <Productgraph />

                            </div>
                            <div className='product_slider'>
                                   <Productgraph />

                            </div>
                            <div className='product_slider'>
                                   <Productgraph />

                            </div>
                            <div className='product_slider'>
                                   <Productgraph />

                            </div>
                            <div className='product_slider'>
                                   <Productgraph />

                            </div>

                     </Carousel>


              </div>
       );
}

export default Productslider;
