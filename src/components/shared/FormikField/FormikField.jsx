import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField, Field } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const FormikInput = ({ variant = "standard", width = 200, ...rest }) => {
  const [field, meta] = useField(rest);
  //generic formik input error handling
  const errorMsg = meta.touched && meta.error ? meta.error : null;

  return (
    <TextField
      style={{ width: width }}
      {...rest}
      {...field}
      variant={variant}
      error={!!errorMsg}
      helperText={errorMsg}
    />
  );
};

export const FormikTextarea = ({
  className,
  showCharCount,
  charLimit,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const errorMsg =
    meta.touched && meta.error ? (
      <span className="text-danger text-smaller">{meta.error}</span>
    ) : null;
  const updatedClass =
    meta.touched && meta.error ? className + " is-invalid" : className;
  return (
    <React.Fragment>
      <textarea className={updatedClass} {...rest} {...field} />
      {showCharCount && (
        <span
          className="characters-count-display mr-4"
          style={{ display: "inline-block" }}
        >{`${field.value?.length}/${charLimit}`}</span>
      )}
      {errorMsg}
    </React.Fragment>
  );
};

export const NotesTextArea = ({ className, ...rest }) => {
  const [field, meta] = useField(rest);
  const updatedClass =
    meta.touched && meta.error ? className + " is-invalid" : className;
  return <textarea className={updatedClass} {...rest} {...field} />;
};

export const FormikCheckbox = ({ name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => <input {...rest} checked={field.value} {...field} />}
    </Field>
  );
};

export const FormikDropdown = ({
  variant = "standard",
  width = 200,
  options,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  //generic formik input error handling
  const errorMsg = meta.touched && meta.error ? meta.error : null;

  return (
    <TextField
      style={{ width: width }}
      {...rest}
      {...field}
      select
      variant={variant}
      error={!!errorMsg}
      helperText={errorMsg}
    >
      {options.map((op, i) => {
        return (
          <MenuItem value={op.value} key={`opt_${i}`}>
            {" "}
            {op.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default FormikInput;
