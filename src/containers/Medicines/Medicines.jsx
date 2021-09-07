import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Dashboard from "../../components/dashboard";
import ManageMedicineStock from "../../components/medicines/ManageMedicineStock";
import ViewMedicines from "../../components/medicines/ViewMedicines";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const medicineTabs = [
  {
    label: "Add/Update Medicine Stock",
    value: "add_upt_med",
    component: ManageMedicineStock,
  },
  { label: "View Medicine", value: "view_med", component: ViewMedicines },
  {
    label: "Manage Pharmacy Medicine",
    value: "manage_pharmacy_med",
    component: ManageMedicineStock,
  },

  {
    label: "Return Medicine",
    value: "return_med",
    component: ManageMedicineStock,
  },
];
const Medicines = () => {
  const classes = useStyles();
  const [selectedMedicineTab, setSelectedMedicineTab] = React.useState(
    medicineTabs[0].value
  );

  const handleChange = (_, newValue) => {
    setSelectedMedicineTab(newValue);
  };

  const MedComponent = React.useMemo(
    () =>
      medicineTabs.find((mTab) => mTab.value === selectedMedicineTab).component,
    [selectedMedicineTab]
  );

  return (
    <div>
      <Dashboard>
        <Paper className={classes.root}>
          <Tabs
            value={selectedMedicineTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {medicineTabs.map((mTab) => (
              <Tab label={mTab.label} value={mTab.value} key={mTab.value} />
            ))}
          </Tabs>
        </Paper>
        <Box m={2}>
          <MedComponent />
        </Box>
      </Dashboard>
    </div>
  );
};
export default Medicines;
