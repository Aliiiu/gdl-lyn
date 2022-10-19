import { TextareaAutosize } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import {
  country,
  gender,
  marritalStatus,
} from "../../../constants/selectValue";
import { DatePickerField, DropdownField, FormTextField } from "./Form";

const NextOfKin = ({ control, formState, register }) => {
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
        <span className="font-thin">Next of Kin</span>
      </div>
      <div className="body flex gap-3 flex-col">
        <div className="grid gap-3 lg:grid-cols-3">
          <FormTextField
            name="lastName"
            multiline
            maxRows={4}
            label="Last Name"
            control={control}
            error={formState.errors.surname}
            {...register("lastName", { required: true })}
          />
          <FormTextField
            label="First Name"
            name="firstname"
            control={control}
            error={formState.errors.firstname}
            {...register("firstname", { required: true })}
          />
          <FormTextField
            name="othername"
            multiline
            maxRows={4}
            label="Other Name"
            control={control}
            error={formState.errors.othername}
            {...register("othername")}
          />
        </div>
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
          <DropdownField
            name="maritalStatus"
            age={age}
            handleChange={handleChange}
            label="Marital Status"
            selectValue={marritalStatus}
            control={control}
            error={formState.errors.maritalStatus}
            {...register("maritalStatus", { required: true })}
          />
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <DropdownField
            name="country"
            age={age}
            handleChange={handleChange}
            label="Country of Residence"
            selectValue={country}
            control={control}
            error={formState.errors.country}
            {...register("country", { required: true })}
          />
          <FormTextField
            name="city"
            multiline
            maxRows={4}
            label="City"
            control={control}
            error={formState.errors.city}
            {...register("city")}
          />
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <FormTextField
            name="phoneNumber"
            multiline
            maxRows={4}
            label="Phone Number"
            control={control}
            error={formState.errors.phoneNumber}
            {...register("phoneNumber", { required: true })}
          />
          <FormTextField
            name="email"
            multiline
            maxRows={4}
            label="Email"
            control={control}
            error={formState.errors.email}
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Address of Residence"
            name="address"
            control={control}
            error={formState.errors.address}
            {...register("address", { required: true })}
            className="mytext w-full focus:outline-[#A23437]"
          />
          {formState.errors.address && (
            <h5 className="text-red-500 text-xs">Enter an Address</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default NextOfKin;
