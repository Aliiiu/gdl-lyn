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
import React from "react";
import styled from "styled-components";
import {
  DatePicker,
  DatePickerField,
  DropdownField,
  FormTextField,
} from "../components/Widgets/Form/Form";
import { useForm } from "react-hook-form";
import { country, gender } from "../constants/selectValue";
import dayjs from "dayjs";
import BioDataForm from "../components/Widgets/Form/BioDataForm";
import NextOfKin from "../components/Widgets/Form/NextOfKin";
import BankDetails from "../components/Widgets/Form/BankDetails";
import { BsArrowRightShort } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const GetStartedWrapper = styled.div`
  background-image: url("../assets/GDL_BI.png");
  background-size: cover;
  .container {
    max-width: 900px;
    padding: 2em;
    ${"" /* background-color: lightBlue; */}
  }
  .form {
    border: 1px solid #e8ebed;
    border-radius: 0.5em;
    margin-top: 20px;
    .header {
      padding: 12px;
      background-color: #8d2e36;
      color: white;
    }
    .body {
      padding: 10px;
    }
  }
  .mytext {
    border: 1px solid #e8ebed;
    border-radius: 4px;
    padding: 0.8em;
    color: #24215d;
    font-size: 14px;
    resize: none;
    ::placeholder {
      color: #24215d;
    }
  }
`;

const FormInput = Muistyled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& label": {
    color: "#24215D",
    fontSize: "14px",
  },
  "& label.Mui-focused": {
    color: "#24215D",
    lineHeight: "1.2",
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #e8ebed",
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
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: "#A23437",
    },
  },
}));

const GetStarted = () => {
  const { handleSubmit, formState, register, control } = useForm({
    mode: "onChange",
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <GetStartedWrapper>
      <div className="container  mx-auto">
        <div className="bg-rose-100 px-5 py-6">
          <div className="flex justify-center">
            <div className="flex w-full justify-center items-center">
              <span className="w-7 h-7 rounded-full bg-[#E8EbEd]"></span>
              <div className="h-[2px] w-full max-w-[500px] bg-[#e8ebed]"></div>
              <span className="w-3 h-3 rounded-full bg-[#E8EbEd]"></span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BioDataForm
              formState={formState}
              register={register}
              control={control}
            />
            <NextOfKin
              formState={formState}
              register={register}
              control={control}
            />
            <BankDetails
              formState={formState}
              register={register}
              control={control}
            />
            <div className="flex justify-end">
              <div className="flex gap-2">
                {/* <AppButton
                  name="cancel"
                  icon={
                    <div className="w-4 h-4 flex justify-center items-center rounded-full border-white border">
                      <IoCloseOutline className="text-md font-thin" />
                    </div>
                  }
                  className="bg-[#992333] px-4 py-2 rounded-[14px] text-xl font-semibold"
                /> */}
                {/* <AppButton
                  name="next"
                  icon={
                    <div className="w-4 h-4 flex justify-center items-center rounded-full border-white border">
                      <BsArrowRightShort
                        color="#ffffff"
                        className="text-md font-thin"
                      />
                    </div>
                  }
                  className="bg-[#992333] px-4 py-2 rounded-[14px] text-xl font-semibold"
                /> */}
                <button
                  type="submit"
                  className="bg-[#992333] px-4 flex py-2 items-center gap-1 rounded-[14px] text-xl font-semibold"
                >
                  <span className="md:text-sm text-white font-thin text-sm">
                    Cancel
                  </span>
                  <div className="w-4 h-4 flex justify-center items-center rounded-full border-white border">
                    <IoCloseOutline className="text-md text-white font-thin" />
                  </div>
                </button>
                <button
                  type="submit"
                  className="bg-[#992333] px-4 flex py-2 items-center gap-1 rounded-[14px] text-xl font-semibold"
                >
                  <span className="md:text-sm text-white font-thin text-sm">
                    Next
                  </span>
                  <div className="w-4 h-4 flex justify-center items-center rounded-full border-white border">
                    <BsArrowRightShort
                      color="#ffffff"
                      className="text-md font-thin"
                    />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </GetStartedWrapper>
  );
};

export default GetStarted;
