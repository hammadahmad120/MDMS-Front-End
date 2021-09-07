import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchMedicine from "../shared/search/SearchMedicine";
import MedicineInputs from "./form-inputs/MedicineInputs";
import BatchInputs from "./form-inputs/BatchInputs";
import { addMedicine } from "../../services/medicineService";

const ManageMedicineStock = () => {
  const [updateExistingId, setupdateExistingId] = React.useState(null);

  const formikRef = React.useRef();

  const onSelectExisting = (medObj) => {
    const { resetForm, setFieldValue } = formikRef.current;
    resetForm();
    if (medObj) {
      setupdateExistingId(medObj.id);
      setFieldValue("medName", medObj.medName);
    } else {
      setupdateExistingId(null);
    }
  };

  let formikDefaultValues = {
    medName: "",
    potency: "",
    medType: "",
    minimumUnit: "",
    unitPrice: "",
    drugQuantity: 0,
    manufacturer: "",
    batchNum: "",
    totalQuantity: "",
    amountPaid: "",
    manuDate: new Date(),
    expiryDate: new Date(),
  };

  return (
    <Box m={3}>
      <Box mb={8} align={"center"}>
        <SearchMedicine
          placeHolder="Search Existing Medicine"
          onSearchUpdated={onSelectExisting}
        />
      </Box>

      <Paper elevation={3}>
        <Box ml={4} pb={4} pt={4}>
          <Formik
            innerRef={formikRef}
            initialValues={formikDefaultValues}
            validationSchema={Yup.object({
              medName: Yup.string()
                .min(2, "Medicine name must be atleast 2 characters long")
                .max(250, "Medicine name must be less then 250 characters")
                .required("Medicine name is required"),
              potency: Yup.string()
                .required("Potency is required")
                .matches(/^[0-9]+mg$/, "Invalid potency format"),
              medType: Yup.string().required("Please select medicine type"),
              manufacturer: Yup.string()
                .min(2, "Manufacturer name must be atleast 2 characters long")
                .max(250, "Manufacturer name must be less then 250 characters")
                .required("Manufacturer name is required"),
              minimumUnit: Yup.number()
                .required()
                .test("test-min-unit", "", function (value) {
                  const { path, createError } = this;

                  if (value > 0) return true;
                  else
                    return createError({
                      path,
                      message: "Number should be greater then 0",
                    });
                }),
              unitPrice: Yup.number()
                .required()
                .test("test-unit-price", "", function (value) {
                  const { path, createError } = this;
                  if (value > 0) return true;
                  else
                    return createError({
                      path,
                      message: "Number should be greater then 0",
                    });
                }),
              batchNum: Yup.number().required(),
              totalQuantity: Yup.number().min(1).required(),
              amountPaid: Yup.number().required(),
            })}
            onSubmit={(values, actions) => {
              addMedicine(values)
                .then((res) => {
                  console.log("Success Response");
                  actions.resetForm();
                })
                .catch((err) => {
                  console.log("Error is: ", err.errors);
                });
            }}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <MedicineInputs isDisabled={!!updateExistingId} />
                <BatchInputs values={values} setFieldValue={setFieldValue} />
                <Box mt={6}>
                  <Grid container justify="center">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ marginRight: "64px" }}
                    >
                      Save
                    </Button>
                    <Button variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Box>
  );
};

export default ManageMedicineStock;
