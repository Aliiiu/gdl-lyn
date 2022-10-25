import styled from "styled-components";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled as Muistyled,
  TextareaAutosize,
  TextField,
} from "@mui/material";

export const FormField = styled.div`
  /** style input field here */
  width: 100%;
  margin: 20px 0;
  input,
  select,
  textarea {
    outline: none;
    border: none;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
    padding: 0 18px;
    border-bottom: 2px solid #fff;
    border-radius: 0;
  }
  .file-input::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }
  .file-input::before {
    content: "select some file";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;
export const Label = styled.label`
  /** style the label of input field */
  color: #fff;
`;

export const FormInput = Muistyled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme, ...props }) => ({
  "& label": {
    color: "#24215D",
    fontSize: "13px",
  },
  "& label.Mui-focused": {
    color: "#24215D",
  },
  "& .MuiFilledInput-root": {
    border: `1px solid ${props.error ? "red" : "#e8ebed"}`,
    overflow: "hidden",
    borderRadius: 3,
    // padding: "0.8em",
    height: "48px",
    color: "#24215D",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: "#A23437",
    },
  },
}));
export const DateInput = Muistyled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme, ...props }) => ({
  "& label": {
    color: "#24215D",
    fontSize: "14px",
  },
  "& label.Mui-focused": {
    color: "#24215D",
    lineHeight: "1.2",
  },
  "& .MuiFilledInput-root": {
    border: `1px solid ${props.error ? "red" : "#e8ebed"}`,
    overflow: "hidden",
    borderRadius: 3,
    // padding: "0.8em",
    height: "48px",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderColor: "#A23437",
    },
  },
}));
