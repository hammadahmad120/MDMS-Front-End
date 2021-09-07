import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FormikInput from "../../shared/FormikField/FormikField";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const BatchInputs = ({ isEditing, values, setFieldValue }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" color="primary">
        Batch Details
      </Typography>
      <Box mt={4} mb={4}>
        <Grid container direction="row" justify="space-around" flexWrap="wrap">
          <FormikInput label="Batch Number" name="batchNum" type="number" />
          <FormikInput
            label="Batch Medicine Quantity"
            name="totalQuantity"
            type="number"
          />
          <FormikInput label="Amount Paid" name="amountPaid" type="number" />
        </Grid>
      </Box>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="row" justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-manu"
            label="Manufacturing Date"
            value={values.manuDate}
            onChange={(value) => setFieldValue("manuDate", value)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-expiry"
            label="Expiry Date"
            value={values.expiryDate}
            onChange={(value) => setFieldValue("expiryDate", value)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default BatchInputs;
