import React from "react";
import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
const useStyles = makeStyles((theme) => ({
  root: {},
  grid: { height: "350px" },
}));

export default (props) => {
  const classes = useStyles();
  const { data, columns, title } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Box padding={1}>
          <Typography variant='h6'>{title}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <DataGrid
          headerHeight={40}
          rowHeight={40}
          rows={data}
          columns={columns}
        />
      </Grid>
    </Grid>
  );
};
