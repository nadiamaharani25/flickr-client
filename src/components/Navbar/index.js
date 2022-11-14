import React from "react";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

// Import @material-ui
import { AppBar, Typography } from "@material-ui/core";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Typography
          className={classes.typo}
          component={Link}
          to={"/"}
          variant="h6"
          noWrap
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <FavoriteTwoToneIcon
            style={{ color: "pink", width: "50px", height: "70px" }}
          />
          PHOTO GALLERY
        </Typography>
      </AppBar>
    </div>
  );
};
export default Navbar;
