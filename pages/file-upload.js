import React, { useEffect, useRef, useState, CSSProperties } from "react";
import { useForm } from "react-hook-form";
import { IoCheckmarkCircleSharp, IoCloseOutline } from "react-icons/io5";
import { VscSaveAs } from "react-icons/vsc";
import styled from "styled-components";
import { FormImageField } from "../components/Widgets/Form/Form";
import { GetStartedWrapper } from "./get-started";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import useLoading from "../hooks/useLoading";
import ClipLoader from "react-spinners/ClipLoader";
import { useS3Upload } from "next-s3-upload";
import Cookies from "js-cookie";

export const CustomImageFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 191px;
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
`;

const FileUpload = () => {
  const router = useRouter();
  const [passport, setPassport] = useState();
  const [signature, setSignature] = useState();
  const [userId, setUserId] = useState();
  const [utilityBill, setUtilityBill] = useState();
  const [uploadData, setUploadData] = useState([]);
  let [imageUrl, setImageUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const { loading, startLoading, stopLoading } = useLoading();
  let handleFileChange = async file => {
    let { url } = await uploadToS3(file);
    console.log(url.replace("gdl-luxury-yield-note.", ""));
    // console.log(JSON.stringify(response));
    setImageUrl(url.replace("gdl-luxury-yield-note.", ""));
  };

  const uploadDocFile = type => async file => {
    startLoading();
    try {
      let obj = {};
      let { url } = await uploadToS3(file);
      // console.log(url);
      stopLoading();
      obj = { type, url };

      if (type == "passport") {
        setPassport(url);
      }
      if (type == "signature") {
        setSignature(url);
      }
      if (type == "user-id") {
        setUserId(url);
      }
      if (type == "utility-bill") {
        setUtilityBill(url);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const { handleSubmit, formState, register, control } = useForm({
    mode: "onChange",
  });

  const onSubmit = data => {
    if (!passport || !signature || !userId || !utilityBill) {
      toast.error("Missing fields are required!");
    } else {
      startLoading();
      const formData = JSON.parse(localStorage.getItem("formData")) || {};
      // console.log(formData);
      // console.log({ passport, signature, userId, utilityBill });
      console.log({ ...formData, passport, signature, userId, utilityBill });

      emailjs
        .send(
          "service_9z472fn",
          "template_04ppk2s",
          { ...formData, passport, signature, userId, utilityBill },
          "45DpXFvmZLKlgyjgW"
        )
        .then(
          result => {
            toast.success("Data sent successfully");
            console.log(result);
          },
          error => {
            toast.error(error.text);
            console.error(error);
          }
        )
        .finally(() => {
          stopLoading();
          localStorage.clear();
          Cookies.remove("allow");
          router.push("/");
        });
    }
  };
  return (
    <GetStartedWrapper>
      <ToastContainer />
      <div className="container bg-white mx-auto">
        <div className=" px-5 py-6">
          <div className="flex justify-center">
            <div className="flex w-full justify-center items-center">
              <span className="">
                <IoCheckmarkCircleSharp className="text-green-400 text-lg" />
              </span>
              <div className="h-[2px] w-full max-w-[500px] bg-[#e8ebed]"></div>
              <span className="w-6 h-6 rounded-full bg-[#E8EbEd]"></span>
            </div>
          </div>
          <form
            className="border mt-5 rounded-lg border-[#e8ebed] p-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FormImageField
                label={"Passport"}
                name={"passport"}
                register={register}
                uploadFile={uploadDocFile("passport")}
                error={formState.errors.passport}
                {...register("passport", { required: false })}
              />
              <FormImageField
                label={"Signature"}
                name={"signature"}
                register={register}
                uploadFile={uploadDocFile("signature")}
                error={formState.errors.signature}
                {...register("signature", { required: false })}
              />
              <FormImageField
                label={"User Identification"}
                name={"user-id"}
                register={register}
                size={"1MB"}
                uploadFile={uploadDocFile("user-id")}
                error={formState.errors["user-id"]}
                {...register("user-id", { required: false })}
              />
              <FormImageField
                label={"Utility Bill"}
                name={"utility-bill"}
                register={register}
                size={"1MB"}
                uploadFile={uploadDocFile("utility-bill")}
                error={formState.errors["utility-bill"]}
                {...register("utility-bill", { required: false })}
              />
            </div>

            <div className="flex border-b border-[#e8ebed] py-5 justify-end">
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-[#992333] px-4 flex py-2 items-center cursor-pointer gap-1 rounded-[14px] text-xl font-semibold"
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
                  disabled={loading}
                  className="bg-[#992333] px-4 flex py-2 min-w-[80px] items-center gap-1 cursor-pointer disabled:bg-opacity-50 disabled:cursor-not-allowed rounded-[14px] text-xl font-semibold"
                >
                  {loading ? (
                    <ClipLoader className="mx-auto" size={20} color="#FFFFFF" />
                  ) : (
                    <>
                      <span className="md:text-sm text-white font-thin text-sm">
                        Submit
                      </span>
                      <div className="w-4 h-4 flex justify-center items-center rounded-full border-white border">
                        <VscSaveAs
                          color="#ffffff"
                          className="text-md font-thin"
                        />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </GetStartedWrapper>
  );
};

export default FileUpload;
