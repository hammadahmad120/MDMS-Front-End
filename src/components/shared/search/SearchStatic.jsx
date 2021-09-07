import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchStatic = ({
  placeHolder,
  width = 300,
  options = [],
  onSearchUpdated = () => {},
}) => {
  return (
    <div style={{ width: width }}>
      <Autocomplete
        id="search-auto-static"
        freeSolo
        getOptionSelected={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.value}
        options={options}
        onChange={(event, newValue) => {
          console.log("Value is: ", newValue);
          onSearchUpdated(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeHolder}
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default SearchStatic;
