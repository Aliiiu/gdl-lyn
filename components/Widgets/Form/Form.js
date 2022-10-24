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

          uploadFile(event.target.files[0]);

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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "0px",
    color: "red",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
const CustomSelect = styled(Select)(({ theme, props }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #e8ebed`,
    "&.Mui-focused": {
      backgroundColor: "transparent",
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: "#A23437",
    },
  },
  "& .MuiFormControl-root": {
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderColor: "red",
    },
  },
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "red",
  },
}));

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
          // "&.input-success": {
          //   input: {
          //     borderColor: theme.palette.success.dark,
          //   },
          // },
          // "&.Mui-error": {
          //   ".MuiSelect-select": {
          //     border: `2px solid ${theme.palette.error.dark}`,
          //   },
          // },
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
            color: "#24215D",
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
          // ".MuiSelect-icon": {
          //   right: 12,
          //   path: {
          //     fill: theme.palette.utility.extradark,
          //   },
          //   "&.Mui-disabled": {
          //     path: {
          //       fill: theme.palette.utility.main,
          //     },
          //   },
          // },
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
                          className="text-sm text-[#24215D] max-w-[100px] sm:max-w-fit lowercase"
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
export const DatePickerField = React.forwardRef(
  ({ label, name, control, className, error }, ref) => {
    const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

    const handleDateChange = newValue => {
      setValue(newValue);
    };

    const CustomDatePicker = styled(DatePicker)(({ theme, props }) => ({
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid #e8ebed`,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "#A23437",
        },
        "&.Mui-focused": {
          backgroundColor: "transparent",
          // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
          borderColor: "#A23437",
        },
      },
      // "& .MuiFormControl-root": {
      //   border: 0,
      // },
    }));
    return (
      <>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <div className="flex flex-col">
              <LocalizationProvider ref={ref} dateAdapter={AdapterDayjs}>
                <>
                  <CustomDatePicker
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
                            color: "#24215D",
                            fontSize: "14px",
                          },
                          "& label.Mui-focused": {
                            color: "#24215D",
                          },
                          "& .MuiOutlinedInput-root": {
                            border: 0,
                            height: "48px",
                            // "&.Mui-focused": {
                            //   backgroundColor: ""transparent"",
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
TextAreaField.displayName = "MyTextAreaField";
DropdownField.displayName = "MySelectField";
DatePickerField.displayName = "MyDateField";
FormImageField.displayName = "CustomImageField";
