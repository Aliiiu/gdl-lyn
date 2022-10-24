import { useS3Upload } from "next-s3-upload";
import Image from "next/image";
import React, { useEffect, useRef, useState, CSSProperties } from "react";
import { useForm } from "react-hook-form";
import { IoCheckmarkCircleSharp, IoCloseOutline } from "react-icons/io5";
import { VscSaveAs } from "react-icons/vsc";
// import { uploadFile } from "react-s3";
import styled from "styled-components";
import { FormImageField } from "../components/Widgets/Form/Form";
import { GetStartedWrapper } from "./get-started";
// window.Buffer = window.Buffer || require("buffer").Buffer;
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import useLoading from "../hooks/useLoading";
import ClipLoader from "react-spinners/ClipLoader";

export const CustomImageFile = styled.label`
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
`;

const FileUpload = () => {
  const router = useRouter();
  const [passport, setPassport] = useState();
  const [signature, setSignature] = useState();
  const [userId, setUserId] = useState();
  const [utilityBill, setUtilityBill] = useState();
  // const [uploadPayload, setUploadPayload] = useState({
  //   passport: "",
  //   signature: "",
  //   "user-id": "",
  //   "utility-bill": "",
  // });
  let [imageUrl, setImageUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const { loading, startLoading, stopLoading } = useLoading();
  const override = {
    display: "block",
    margin: "0 auto",
    height: "8px",
  };
  let handleFileChange = async file => {
    let { url } = await uploadToS3(file);
    console.log(url.replace("gdl-luxury-yield-note.", ""));
    // console.log(JSON.stringify(response));
    setImageUrl(url.replace("gdl-luxury-yield-note.", ""));
  };

  const uploadDocFile = type => async file => {
    try {
      let obj = {};
      let { url } = await uploadToS3(file);
      const new_url = url.replace("gdl-luxury-yield-note.", "");
      obj = { type, url };

      if (type == "passport") {
        setPassport(new_url);
      }
      if (type == "signature") {
        setSignature(new_url);
      }
      if (type == "user-id") {
        setUserId(new_url);
      }
      if (type == "utility-bill") {
        setUtilityBill(new_url);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const { handleSubmit, formState, register, control } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    console;
  });
  const onSubmit = data => {
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
        router.push("/");
      });
  };
  return (
    <GetStartedWrapper>
      <ToastContainer />
      <div className="container  mx-auto">
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
              {/* <div>
                <FileInput onChange={handleFileChange} />

                <button onClick={openFileDialog}>Upload file</button>

                {imageUrl && (
                  <img
                    src={imageUrl}
                    className="border border-green-200 w-full h-full"
                  />
                )}
              </div> */}
              <FormImageField
                label={"Passport"}
                name={"passport"}
                register={register}
                uploadFile={uploadDocFile("passport")}
                // {...register("passport", { required: true })}
              />
              <FormImageField
                label={"Signature"}
                name={"signature"}
                register={register}
                uploadFile={uploadDocFile("signature")}
                // {...register("signature", { required: true })}
              />
              <FormImageField
                label={"User Identification"}
                name={"user-id"}
                register={register}
                size={"1MB"}
                uploadFile={uploadDocFile("user-id")}
                // {...register("user-id", { required: true })}
              />
              <FormImageField
                label={"Utility Bill"}
                name={"utility-bill"}
                register={register}
                size={"1MB"}
                uploadFile={uploadDocFile("utility-bill")}
                // {...register("utility-bill", { required: true })}
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
