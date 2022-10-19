import { TextareaAutosize } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import {
  country,
  gender,
  marritalStatus,
} from "../../../constants/selectValue";
import { DatePickerField, DropdownField, FormTextField } from "./Form";

const BankDetails = ({ control, formState, register }) => {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleDateChange = newValue => {
    setValue(newValue);
  };

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="form">
      <div className="header">
        <span className="font-thin">Bank Details</span>
      </div>
      <div className="body flex gap-3 flex-col">
        <div className="grid gap-3 lg:grid-cols-2">
          <DropdownField
            name="gender"
            age={age}
            handleChange={handleChange}
            label="Gender"
            selectValue={gender}
            control={control}
            error={formState.errors.gender}
            {...register("gender", { required: true })}
          />
          <FormTextField
            name="accountName"
            multiline
            maxRows={4}
            label="Bank Account Name"
            control={control}
            error={formState.errors.accountName}
            {...register("accountName")}
          />
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <FormTextField
            name="accountNumber"
            multiline
            maxRows={4}
            label="Account Number"
            control={control}
            error={formState.errors.accountNumber}
            {...register("accountNumber")}
          />
          <FormTextField
            name="bvn"
            multiline
            maxRows={4}
            label="BVN(Optional)"
            control={control}
            error={formState.errors.bvn}
            {...register("bvn")}
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
