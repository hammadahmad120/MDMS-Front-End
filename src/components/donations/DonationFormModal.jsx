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
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "500px" },
  form: {},
}));

const validationSchema = Yup.object({
  donationBy: Yup.string().required("Please select doner"),
  amount: Yup.number().required("Amount is required"),
  description: Yup.string(),
});

export default (props) => {
  const { isLoading, doners, editDonation } = props;

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      donationBy: editDonation ? editDonation.donationBy : "",
      amount: editDonation ? editDonation.amount : "",
      description: editDonation ? editDonation.description : "",
    },
    validationSchema: validationSchema,
    onSubmit: (newDonation) => {
      props.handleSubmit(newDonation);
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
          {editDonation ? "Update Donation" : "Add New Donation"}
        </DialogTitle>
        <DialogContent>
          <Grid container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                id='donationBy'
                options={doners}
                disableClearable
                defaultValue={
                  editDonation
                    ? doners.filter((d) => d.id == editDonation.donationBy)[0]
                    : null
                }
                getOptionLabel={(doner) => `${doner.name} ( ${doner.cnic})`}
                onChange={(e, value) => {
                  formik.setFieldValue(
                    "donationBy",
                    value !== null ? value.id : formik.initialValues.donationBy
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    margin='normal'
                    label='Doner'
                    fullWidth
                    name='donationBy'
                    autoFocus
                    error={
                      formik.touched.donationBy &&
                      Boolean(formik.errors.donationBy)
                    }
                    helperText={
                      formik.touched.donationBy && formik.errors.donationBy
                    }
                    {...params}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='amount'
                label='Amount'
                name='amount'
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                id='description'
                label='Description'
                name='description'
                value={formik.values.description}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
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
            ) : editDonation ? (
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
