import { TextareaAutosize } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import {
  country,
  gender,
  marritalStatus,
} from "../../../constants/selectValue";
import {
  DatePickerField,
  DropdownField,
  FormTextField,
  TextAreaField,
} from "./Form";

const BioDataForm = ({ control, formState, register }) => {
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
        <span className="font-thin">Bio-data</span>
      </div>
      <div className="body flex gap-3 flex-col">
        <div className="grid gap-3 md:grid-cols-3">
          <FormTextField
            name="Surname"
            multiline
            maxRows={4}
            label="Surname"
            control={control}
            error={formState.errors.surname}
            {...register("surname", { required: true })}
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
        <div className="grid gap-3 md:grid-cols-3">
          <DropdownField
            name="gender"
            label="Gender"
            selectValue={gender}
            control={control}
            error={formState.errors.gender}
            {...register("gender", { required: true })}
          />
          <DatePickerField
            label="Date of Birth"
            name="dob"
            control={control}
            error={formState.errors.dob}
            value={value}
            handleChange={handleDateChange}
          />
          <DropdownField
            name="maritalStatus"
            label="Marital Status"
            selectValue={marritalStatus}
            control={control}
            error={formState.errors.maritalStatus}
            {...register("maritalStatus", { required: true })}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
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
        <div className="grid gap-3 md:grid-cols-3">
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
            name="stateOfResidence"
            multiline
            maxRows={4}
            label="State of Residence"
            control={control}
            error={formState.errors.stateOfResidence}
            {...register("stateOfResidence", { required: true })}
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
        <div>
          <TextAreaField
            name="addressOfResidence"
            label={"address of residence"}
            control={control}
            error={formState.errors.addressOfResidence}
            {...register("addressOfResidence", { required: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default BioDataForm;
