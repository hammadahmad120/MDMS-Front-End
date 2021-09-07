import React from "react";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    boxShadow: "0 8px 6px -6px #3f51b5",
    paddingBottom: "5px",
  },
  button: {
    marginLeft: "4px",
  },
});

export default ({ title, buttons = [] }) => {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify='space-between' className={classes.root}>
      <Grid xs={4} item>
        {title && <Typography variant='h5'>{title}</Typography>}
      </Grid>
      <Grid
        xs={8}
        item
        container
        direction='row'
        justify={"flex-end"}
        spacing={1}
      >
        {buttons && buttons.map((button) => <Grid item>{button}</Grid>)}
      </Grid>
    </Grid>
  );
};
