import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MedicineInputs from "../../medicines/form-inputs/MedicineInputs";
import ModalWrapper from "../../shared/hoc/ModalWrapper";

const UpdateMedicineModal = ({ medObj = {}, onModalClose }) => {
  let formikDefaultValues = {
    ...medObj,
  };

  return (
    <ModalWrapper
      openModal={true}
      maxWidth="md"
      modalTitle={"Edit Medicine"}
      onModalClose={onModalClose}
    >
      <Box m={3}>
        <Formik
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
          })}
          onSubmit={(values, actions) => {
            console.log("Values are: ", values);
          }}
        >
          <Form>
            <Paper elevation={3}>
              <Box ml={4} pb={4} pt={4}>
                <MedicineInputs isDisabled={false} />
              </Box>
            </Paper>
            <Box mt={3}>
              <Grid container justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginRight: "64px" }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onModalClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Box>
          </Form>
        </Formik>
      </Box>
    </ModalWrapper>
  );
};

export default UpdateMedicineModal;
