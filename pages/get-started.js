import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import BioDataForm from "../components/Widgets/Form/BioDataForm";
import NextOfKin from "../components/Widgets/Form/NextOfKin";
import BankDetails from "../components/Widgets/Form/BankDetails";
import { BsArrowRightShort } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

export const GetStartedWrapper = styled.div`
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
  .custom-file-upload {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 191px;
    cursor: pointer;
    background: white;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    input[type="file"] {
      display: none;
    }
    .icon {
      position: absolute;
      width: 45px;
      bottom: -60px;
      right: 0px;
    }
    .img-wrapper {
      position: relative;
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
      }
      .loading_container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: auto;
      height: 100%;
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

const GetStarted = () => {
  const { handleSubmit, formState, register, control } = useForm({
    mode: "onChange",
  });
  const onSubmit = data => {
    console.log(data);
    console.log(data.firstname);
    // const payload = JSON.parse(data);
    emailjs
      .send("service_9z472fn", "template_04ppk2s", data, "45DpXFvmZLKlgyjgW")
      .then(
        result => {
          toast.success(result.text);
          console.log(result);
        },
        error => {
          toast.error(error.text);
          console.error(error);
        }
      );
  };

  return (
    <GetStartedWrapper>
      <ToastContainer />
      <div className="container  mx-auto">
        <div className=" px-5 py-6">
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
            <div className="flex border-b border-[#e8ebed] py-5 justify-end">
              <div className="flex gap-2">
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
