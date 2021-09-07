import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@material-ui/core";
import GridWrapper from "../shared/hoc/GridWrapper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ModalWrapper from "../shared/hoc/ModalWrapper";
import { getMedicines } from "../../services/medicineService";
import UpdateMedicineModal from "../modals/medicines/UpdateMedicineModal";
import AlertMsg from "../shared/AlertMsg/AlertMsg";
import Spinner from "../shared/Spinner/Spinner";

const cellWidth = 144;

const ViewMedicines = () => {
  const [medData, setMedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(null);
  const [showEditMedicine, setShowEditMedicine] = useState(false);
  const [medToEdit, setMedToEdit] = useState(null);

  useEffect(() => {
    getMedicines()
      .then((res) => {
        setMedData(res.data);
        console.log("Data is: ", res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error is: ", err);
        setServerError(
          err?.errors?.length ? err?.errors[0] : "Some Unexpected Error"
        );
        setIsLoading(false);
      });
  }, []);

  const medColumns = [
    {
      field: "medName",
      headerName: "Medicine",
      width: cellWidth + 100,
      renderCell: (cell) => {
        return (
          <>
            <b>{`${cell.value} `}</b> &nbsp; <span>{cell.row.potency}</span>
          </>
        );
      },
    },
    {
      field: "medType",
      headerName: "Type",
      width: cellWidth,
    },

    {
      field: "minimumUnit",
      headerName: "Min. Unit",
      width: cellWidth,
    },
    {
      field: "unitPrice",
      headerName: "Price/Unit",
      width: cellWidth,
    },
    {
      field: "drugQuantity",
      headerName: "Quantity",
      width: cellWidth + 50,
    },
    {
      field: "",
      disableColumnMenu: true,
      sortable: false,
      headerName: "Actions",
      width: cellWidth,
      renderCell: (cellData) => (
        <Box>
          <IconButton
            onClick={() => {
              setShowEditMedicine(true);
              setMedToEdit(cellData.row);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => {}}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  return (
    <Box m={3}>
      {serverError && (
        <AlertMsg
          msg={serverError}
          onCloseCallback={() => {
            setServerError(null);
          }}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Box pb={4} pt={2}>
            <GridWrapper
              headerHeight={50}
              rowHeight={40}
              rows={medData}
              columns={medColumns}
              autoHeight
            />
          </Box>
          {showEditMedicine && medToEdit && (
            <UpdateMedicineModal
              medObj={medToEdit}
              onModalClose={() => {
                setShowEditMedicine(false);
                setMedToEdit(null);
              }}
            />
          )}
        </div>
      )}
    </Box>
  );
};

export default ViewMedicines;
