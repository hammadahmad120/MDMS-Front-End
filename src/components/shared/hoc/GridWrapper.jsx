import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const GridWrapper = ({ height = 400, classes = {}, ...gridProps }) => {
  return (
    <div
      style={{ height: height, width: "100%" }}
      className={classes.root ?? ""}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid {...gridProps} />
        </div>
      </div>
    </div>
  );
};

export default GridWrapper;
