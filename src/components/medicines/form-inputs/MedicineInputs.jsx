import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormikInput, {
  FormikDropdown,
} from "../../shared/FormikField/FormikField";
import { MED_TYPES } from "../../../constants/constants";

const MedicineInputs = ({ isDisabled, isEditing }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" color="primary">
        Medicine Details
      </Typography>
      <Grid container direction="row" justify="space-around">
        <FormikInput
          label="Medicine Name"
          name="medName"
          disabled={isDisabled}
        />
        <FormikInput label="Potency" name="potency" disabled={isDisabled} />
        <FormikDropdown
          label="Select Medicine Type"
          options={MED_TYPES}
          name="medType"
          disabled={isDisabled}
        />
      </Grid>
      <Box mt={4}>
        <Grid container direction="row" justify="space-around">
          <FormikInput
            label="Minimum Unit"
            name="minimumUnit"
            type={"number"}
            disabled={isDisabled}
          />
          <FormikInput
            label="Unit Price"
            name="unitPrice"
            type={"number"}
            disabled={isDisabled}
          />
          <FormikInput
            label="Current Quantity"
            name="drugQuantity"
            type={"number"}
            disabled
          />
        </Grid>
      </Box>
      <Box mt={4} mb={4}>
        <Grid container direction="row" justify="space-around">
          <FormikInput
            label="Manufacturer"
            name="manufacturer"
            disabled={isDisabled}
          />
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default MedicineInputs;
