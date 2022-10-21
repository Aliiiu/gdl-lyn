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
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { CustomImageFile } from "../../../pages/file-upload";
import { getBase64 } from "../../utils/helper";
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

export const FormImageField = React.forwardRef(
  (
    {
      label,
      type,
      name,
      control,
      className,
      formError,
      uploadFile,
      register,
      size,
    },
    ref
  ) => {
    let { onChange } = register(name);
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    const fileRef = useRef();

    const onFileChange = useCallback(async event => {
      setError("");
      if (event.target.files[0]) {
        if (event.target.files[0].size < 250000) {
          const base64 = await getBase64(event.target.files[0]);

          // uploadFile(event.target.files[0]);
          // console.log(event.target.files[0]);

          setImage(base64);
          onChange(event);
        } else {
          setError("File too large");
        }
      }
    }, []);
    return (
      <>
        <div className=" border border-[#e8ebed]">
          <div className="p-2 font-thin text-sm text-gray-400 border-b border-[#e8ebed]">
            {label}
          </div>
          <div className="flex flex-col gap-2">
            <CustomImageFile htmlFor={name}>
              <div className="border-2 border-gray-400 w-[300px] h-[191px] flex justify-center items-center p-5">
                {image ? (
                  <div className="flex flex-col gap-3">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm w-[150px] h-[120px]">
                      <Image
                        src={image}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span
                      onClick={() => setImage("")}
                      className="text-red-800 text-center text-xs"
                    >
                      Remove image
                    </span>
                  </div>
                ) : (
                  <span className="text-gray-400 text-sm text-center max-w-[200px]">
                    Drop files here or click to upload.
                  </span>
                )}
              </div>

              <input
                id={name}
                accept=".png, .jpeg, .jpg"
                type={"file"}
                ref={fileRef}
                name={name}
                onChange={onFileChange}
                className="dp_wrapper"
                multiple
              />
            </CustomImageFile>
            {error && (
              <h5 className="text-red-500 ml-[90px] text-sm">{error}</h5>
            )}
            <span className="text-gray-400 font-thin text-xs">
              Accepted file type: .PNG .JPG, .JPEG
            </span>
            <span className="text-gray-400 font-thin text-xs">
              {" "}
              Max. size : {size || "250KB"}
            </span>
            {/* {!formError ? (
              <div>
                <span className="text-gray-400 font-thin text-xs">
                  Accepted file type: .PNG .JPG, .JPEG
                </span>
                <span className="text-gray-400 font-thin text-xs">
                  {" "}
                  Max. size : {size || "250KB"}
                </span>
              </div>
            ) : (
              <h5 className="text-red-500 text-xs">Enter your {label}</h5>
            )} */}
          </div>
        </div>
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
FormImageField.displayName = "CustomImageField";
