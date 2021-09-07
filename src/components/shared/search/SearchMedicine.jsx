import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const SearchMedicine = ({
  placeHolder,
  isAdmin = true,
  width = 500,
  onSearchUpdated = () => {},
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchMedicineData = () => {
    setOpen(true);
    setIsLoading(true);
    setTimeout(() => {
      setOptions([
        { medName: "Panadol 200 mg", id: 1 },
        { medName: "Brufin 150 mg", id: 2 },
        { medName: "Disprin", id: 3 },
      ]);
      setIsLoading(false);
    }, 3000);
  };
  return (
    <Autocomplete
      id="medicine-search"
      freeSolo
      style={{ width: width }}
      open={open}
      onOpen={fetchMedicineData}
      onClose={() => {
        setOpen(false);
        setOptions([]);
      }}
      onChange={(event, newValue) => {
        console.log("Value is: ", newValue);
        onSearchUpdated(newValue);
      }}
      getOptionSelected={(option, value) => option.medName === value.medName}
      getOptionLabel={(option) => option.medName}
      options={options}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeHolder}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchMedicine;
