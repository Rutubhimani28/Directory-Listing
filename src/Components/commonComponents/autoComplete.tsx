import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import "./selectField.scss";

const EditableSelectField = (props: any) => {
  return (
    <Autocomplete
      disablePortal
      className="combo-box autocomplete"
      {...props}
      options={props.options}
      value={props.value}
      onChange={(event, item) => {
        if (item !== null) {
          props.onChange(item);
        }
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default EditableSelectField;
