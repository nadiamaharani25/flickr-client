import React from "react";
import useStyles from "./styles"; 

// Import @material-ui/core
import { Grid } from "@material-ui/core";

// Components
import Navbar from "../Navbar";
import Photos from "../Photos/Photos";


const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid
        className={classes.gridContainer}
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={4}
      >
        <Photos />
      </Grid>
    </div>
  );
};

export default Home;
