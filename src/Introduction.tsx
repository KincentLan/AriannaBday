import React from 'react';
import { Grid } from "@mui/material";
import './App.css';

function Introduction() {
  return (
    <Grid sx={{ margin: "auto", width: "70vw", minWidth: "420px", padding: "1%"}}
    className="Introduction-Box"
    container
    direction="row"
    justifyContent="center"
    alignItems="stretch">
        <Grid item xs={10} className="Introduction-Text">
            <h1>Hey Arianna, I heard it was your birthday :) </h1>
            <br></br>
            <h2>My best 姐姐! How many years has it been?</h2>
            <br></br>
            <h3>
            Ever since I met you, you were always such a wild person. I remember my first impression 
            was that you wanted to order a salad at a steakhouse, ahaha :D 
            <br></br> <br></br>
            Then there was the time you spit out food (you know what I mean...), and then the rose water,
            and then... 
            <br></br> <br></br>
            Ahaha let's not get into more detail.
            <br></br> <br></br>
            Throughout all these years, you have brought joy to my life, and I can't thank you enough.
            You've given me some of the best memories I've ever had, and I am forever grateful. 
            <br></br> <br></br>
            With that said, you deserve the world! I hope the happiest years yet to come, but for now -
            I hope you have the greatest birthday ever!
            </h3>
        </Grid>
    </Grid>
  );
}

export default Introduction;
