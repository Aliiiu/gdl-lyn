import {
  createTheme,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
                type={type ? type : "text"}
                multiline
                label={
                  label || "How did you hear about us (social media, staff...)"
                }
                variant="filled"
                name={name}
                onChange={onChange}
                error={error}
              />
              {error && (
                <h5 className="text-red-500 text-xs">
                  Enter {label ? `your ${label}` : "this Field"}
                </h5>
              )}
            </div>
          )}
        />
      </>
    );
  }
);
export const TextAreaField = React.forwardRef(
  ({ label, type, name, control, onChange, className, error }, ref) => {
    return (
      <>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <div className="flex flex-col">
              <TextareaAutosize
                aria-label={label}
                minRows={5}
                placeholder="Address of Residence"
                name={name}
                error={error}
                onChange={onChange}
                className="mytext w-full focus:outline-[#A23437]"
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
      error,
      uploadFile,
      register,
      size,
    },
    ref
  ) => {
    let { onChange } = register(name);
    const [image, setImage] = useState(null);
    const [formError, setFormError] = useState("");
    const fileRef = useRef();
    const [fileerror, setFileError] = useState(error | null);

    const onFileChange = useCallback(async event => {
      setFormError("");

      if (event.target.files[0] || image == null) {
        if (event.target.files[0].size < 1000000) {
          const base64 = await getBase64(event.target.files[0]);

          uploadFile(event.target.files[0]);

          setImage(base64);
          onChange(event);
          setFileError(null);
        } else {
          setFormError("File too large check here to compress it");
        }
      }
    }, []);

    //

    return (
      <>
        <div className=" border border-[#e8ebed]">
          <div className="p-2 font-thin text-sm text-gray-400 border-b border-[#e8ebed]">
            {label}
          </div>
          <div className="flex flex-col gap-2">
            <CustomImageFile htmlFor={name}>
              <div
                onClick={() => fileRef.current.click()}
                className="border-2 border-gray-400 w-[200px] cursor-pointer h-[151px] flex justify-center items-center p-5"
              >
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
            {formError && (
              <h5 className="text-red-300 text-xs">
                {formError}{" "}
                <Link href="https://www.iloveimg.com/compress-image">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    https://www.iloveimg.com/compress-image
                  </a>
                </Link>
              </h5>
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

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          // ".MuiInputLabel-root": {
          //   color: "red",
          //   backgroundColor: "black",
          //   "&:active": {
          //     color: "red",
          //   },
          // },
          backgroundColor: "white",
          color: "#24215D",
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius: 3,
          "&:active": {
            color: "#24215D",
          },
          "&:focused": {
            color: "#24215D",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          ".MuiSelect-select": {
            backgroundColor: "transparent",
            border: `1px solid #e8ebed`,
            borderRadius: 3,
            padding: 0,
            paddingRight: 23,
            paddingLeft: 13,
            height: "48px !important",
            fontSize: 14,
            width: "100% !important",
            display: "flex",
            alignItems: "center",
            color: "#696666",
            "&:hover": {
              border: `1px solid #A23437`,
            },
            "&:active": {
              border: `1px solid #A23437`,
              borderRadius: 3,
              backgroundColor: "transparent",
            },
            "&:focus": {
              border: `1px solid #A23437`,
              borderRadius: 3,
              backgroundColor: "transparent",
            },
            "&.Mui-disabled": {
              border: `2px solid grey`,
              backgroundColor: "grey",
              opacity: 0.6,
            },
            "&[aria-expanded=true]": {
              border: `1px solid #A23437`,
            },
          },
          fieldset: {
            display: "none",
          },
        },
      },
    },
  },
});

export const DropdownField = React.forwardRef(
  (
    { label, age, name, control, onChange, className, selectValue, error },
    ref
  ) => {
    const [selectval, setSelectval] = React.useState("");

    return (
      <>
        <ThemeProvider theme={theme}>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
              <div className="flex flex-col">
                <FormControl fullWidth ref={ref}>
                  {selectval ? <InputLabel id={name}>{label}</InputLabel> : ""}
                  <Select
                    labelId={name}
                    id={name}
                    value={selectval}
                    label={selectval ? label : ""}
                    sx={{ height: "48px", width: "100%" }}
                    // input={<BootstrapInput />}
                    onChange={e => {
                      onChange(e.target.value);
                      setSelectval(e.target.value);
                    }}
                    displayEmpty
                    renderValue={value =>
                      value ? (
                        value
                      ) : (
                        <em
                          className="text-sm text-[#696666] max-w-[100px] sm:max-w-fit lowercase"
                          style={{ textDecoration: "lowerCase" }}
                        >
                          --select {label}--
                        </em>
                      )
                    }
                  >
                    {selectValue.map(item => (
                      <MenuItem
                        sx={{ fontSize: "14px" }}
                        key={item.id}
                        value={item.value}
                      >
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
        </ThemeProvider>
      </>
    );
  }
);

const dateTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".MuiInputBase-input": {
            fontSize: "14px",
            color: "#696666",
          },
          fieldset: {
            display: "none",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          border: "1px solid #e8ebed",
          borderRadius: "4px",
          label: {
            backgroundColor: "white",
            paddingRight: "10px",
            paddingLeft: "5px",
          },
          ":hover": {
            borderColor: "#A23437",
          },
        },
      },
    },
  },
});
export const DatePickerField = React.forwardRef(
  ({ label, name, control, className, error }, ref) => {
    const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

    const handleDateChange = newValue => {
      setValue(newValue);
    };

    return (
      <>
        <ThemeProvider theme={dateTheme}>
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
                      onChange={value => {
                        // console.log(value);
                        onChange(value);
                        setValue(value);
                      }}
                      error={error}
                      renderInput={params => (
                        <TextField
                          sx={{
                            "& label": {
                              color: "#696666",
                              fontSize: "14px",
                            },
                            "& label.Mui-focused": {
                              color: "#696666",
                            },
                            "& .MuiOutlinedInput-root": {
                              border: 0,
                              height: "48px",
                              backgroundColor: "transparent",
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
        </ThemeProvider>
      </>
    );
  }
);

FormTextField.displayName = "MyFormTextField";
TextAreaField.displayName = "MyTextAreaField";
DropdownField.displayName = "MySelectField";
DatePickerField.displayName = "MyDateField";
FormImageField.displayName = "CustomImageField";
