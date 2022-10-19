import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Controller } from "react-hook-form";
import { FormField, Label, FormInput } from "./form.style";

export const FormTextField = React.forwardRef(
  ({ label, type, name, control, onChange, className, error }, ref) => {
    return (
      <>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <div className="flex flex-col">
              <FormInput
                ref={ref}
                id={name}
                multiline
                label={label}
                variant="filled"
                name={name}
                onChange={onChange}
                error={error}
              />
              {error && (
                <h5 className="text-red-500 text-xs">Enter your {label}</h5>
              )}
            </div>
          )}
        />
      </>
    );
  }
);

export const DropdownField = React.forwardRef(
  (
    {
      label,
      age,
      name,
      control,
      onChange,
      handleChange,
      className,
      selectValue,
      error,
    },
    ref
  ) => {
    return (
      <>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <div className="flex flex-col">
              <FormControl fullWidth ref={ref}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label={label}
                  sx={{ height: "48px" }}
                  onChange={handleChange}
                >
                  {selectValue.map(item => (
                    <MenuItem key={item.id} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {error && (
                <h5 className="text-red-500 text-xs">Enter your {label}</h5>
              )}
            </div>
          )}
        />
      </>
    );
  }
);
export const DatePickerField = React.forwardRef(
  ({ label, value, name, control, handleChange, className, error }, ref) => {
    return (
      <>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <div className="flex flex-col">
              <LocalizationProvider ref={ref} dateAdapter={AdapterDayjs}>
                <>
                  <DatePicker
                    label={label}
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={value}
                    onChange={handleChange}
                    error={error}
                    renderInput={params => (
                      <TextField
                        sx={{
                          "& label": {
                            color: "#24215D",
                            fontSize: "14px",
                          },
                          "& label.Mui-focused": {
                            color: "#24215D",
                          },
                          "& .MuiOutlinedInput-root": {
                            border: `1px solid #e8ebed`,
                            height: "48px",
                            // "&.Mui-focused": {
                            //   backgroundColor: "transparent",
                            //   borderColor: "#A23437",
                            // },
                          },
                        }}
                        fullWidth
                        {...params}
                      />
                    )}
                  />
                </>
              </LocalizationProvider>
              {error && (
                <h5 className="text-red-500 text-xs">Enter your {label}</h5>
              )}
            </div>
          )}
        />
      </>
    );
  }
);

FormTextField.displayName = "MyFormTextField";
DropdownField.displayName = "MySelectField";
DatePickerField.displayName = "MyDateField";
