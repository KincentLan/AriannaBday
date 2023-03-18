import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Grid } from "@mui/material";

import Image1 from "./img/1.jpg";
import Image2 from "./img/2.jpg";
import Image3 from "./img/3.jpg";
import Image4 from "./img/4.jpg";
import Image5 from "./img/5.jpg";
import Image6 from "./img/6.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const images = [Image3, Image4, Image5, Image6, Image1, Image2];

function ImageCarousel() {
 
      return (
        <Grid sx={{ margin: "auto", width: "70vw", minWidth: "420px", minHeight: "80vh"}}
        className="Carousel"
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch">
            <Grid item xs={10} className="Introduction-Text">
            <h1> Lovely Pictures of Us :) </h1>
            <Slider {...settings}>
                { images.map(img => 
                    <div>
                        <img src={img} style={{maxHeight: "70vh", borderRadius: "10px", overflowX: "auto"}}/>
                    </div>
                    )
                }
            </Slider>
            </Grid>
        </Grid>
    );
}

export default ImageCarousel;