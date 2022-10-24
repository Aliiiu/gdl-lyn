import { TextareaAutosize } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import {
  banks,
  country,
  gender,
  marritalStatus,
} from "../../../constants/selectValue";
import { DatePickerField, DropdownField, FormTextField } from "./Form";

const BankDetails = ({ control, formState, register }) => {
  return (
    <div className="form">
      <div className="header">
        <span className="font-thin">Bank Details</span>
      </div>
      <div className="body flex gap-3 flex-col">
        <div className="grid gap-3 lg:grid-cols-2">
          <DropdownField
            name="bankName"
            label="Bank Name"
            selectValue={banks}
            control={control}
            error={formState.errors.bankName}
            {...register("bankName", { required: true })}
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
