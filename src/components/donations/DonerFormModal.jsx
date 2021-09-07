import React, { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  makeStyles,
  CircularProgress,
  MenuItem,
  Select,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "500px" },
  form: {},
}));

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  cnic: Yup.string()
    .trim()
    .matches(
      /^[0-9]{5}-[0-9]{7}-[0-9]$/,
      "CNIC must follow the format XXXXX-XXXXXXXX-X"
    )
    .required(),
  phone: Yup.string().required("Phone number is required"),
  gender: Yup.string().required("Required"),
  address: Yup.string(),
  company: Yup.string(),
});

export default (props) => {
  const { isLoading, formMode, editDoner } = props;

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: editDoner ? editDoner.name : "",
      cnic: editDoner ? editDoner.cnic : "",
      phone: editDoner ? editDoner.phone : "",
      gender: editDoner ? editDoner.gender : "",
      address: editDoner ? editDoner.address : "",
      company: editDoner ? editDoner.company : "",
    },
    validationSchema: validationSchema,
    onSubmit: (newDoner) => {
      props.handleSubmit(newDoner);
    },
  });

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='form-dialog-title'
      maxWidth='sm'
    >
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <DialogTitle>
          {editDoner ? "Update Doner" : "Add New Doner"}
        </DialogTitle>
        <DialogContent>
          <Grid container xs={12} spacing={1}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='name'
                label='Name'
                name='name'
                autoFocus
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='cnic'
                label="Doner's CNIC"
                name='cnic'
                placeholder='XXXXX-XXXXXXXX-X'
                value={formik.values.cnic}
                error={formik.touched.cnic && Boolean(formik.errors.cnic)}
                helperText={formik.touched.cnic && formik.errors.cnic}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='phone'
                label='Phone Number'
                name='phone'
                placeholder='+92 321 5487526'
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='gender'
                label='Gender'
                name='gender'
                value={formik.values.gender}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
                onChange={formik.handleChange}
                select
              >
                <MenuItem selected value='male'>
                  <em>Male</em>
                </MenuItem>
                <MenuItem value='female'>
                  <em>Female</em>
                </MenuItem>
                <MenuItem value='other'>
                  <em>Other</em>
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='address'
                label='Address'
                name='address'
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='company'
                label='Company'
                name='company'
                value={formik.values.company}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            disabled={isLoading ? true : false}
            type='submit'
            // fullWidth
            variant='contained'
            color='primary'
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : editDoner ? (
              "Save"
            ) : (
              "Add"
            )}
          </Button>
          <Button onClick={props.handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
