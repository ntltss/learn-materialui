import React from "react";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 2,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Anthony sistilli
        </Typography>
        <AccountCircleOutlined />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
