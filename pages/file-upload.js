import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCheckmarkCircleSharp, IoCloseOutline } from "react-icons/io5";
import { VscSaveAs } from "react-icons/vsc";
// import { uploadFile } from "react-s3";
import styled from "styled-components";
import { FormImageField } from "../components/Widgets/Form/Form";
import { GetStartedWrapper } from "./get-started";
// window.Buffer = window.Buffer || require("buffer").Buffer;

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
  const [uploadPayload, setUploadPayload] = useState({
    passport: "",
    signature: "",
    "user-id": "",
    "utility-bill": "",
  });

  const configOption = {
    keyPrefix: "uploads/",
    bucketName: "gdl-fintechapp",
    region: "us-east-2",
    accessKeyId: "AKIAS5WLBGBNY2H27RU3",
    secretAccessKey: "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",
    successActionStatus: 201,
  };

  // const uploadDocFile = type => async file => {
  //   try {
  //     const file_upload = await uploadFile(file, configOption);
  //     alert("loading...");
  //     if (file_upload && type == "passport") {
  //       setUploadPayload({ ...uploadPayload, passport: file_upload.location });
  //     }
  //     if (file_upload && type == "signature") {
  //       setUploadPayload({ ...uploadPayload, signature: file_upload.location });
  //     }
  //     if (file_upload && type == "user-id") {
  //       setUploadPayload({ ...uploadPayload, "user-id": file_upload.location });
  //     }
  //     if (file_upload && type == "utility-bill") {
  //       setUploadPayload({
  //         ...uploadPayload,
  //         "utility-bill": file_upload.location,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const { handleSubmit, formState, register, control } = useForm({
    mode: "onChange",
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  return (
    <GetStartedWrapper>
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
              <FormImageField
                label={"Passport"}
                name={"passport"}
                register={register}
                // uploadFile={uploadDocFile("passport")}
                // {...register("passport", { required: true })}
              />
              <FormImageField
                label={"Signature"}
                name={"signature"}
                register={register}
                // uploadFile={uploadDocFile("signature")}
                // {...register("signature", { required: true })}
              />
              <FormImageField
                label={"User Identification"}
                name={"user-id"}
                register={register}
                size={"1MB"}
                // uploadFile={uploadDocFile("user-id")}
                // {...register("user-id", { required: true })}
              />
              <FormImageField
                label={"Utility Bill"}
                name={"utility-bill"}
                register={register}
                size={"1MB"}
                // uploadFile={uploadDocFile("utility-bill")}
                // {...register("utility-bill", { required: true })}
              />
              {/* <div className="border border-[#e8ebed]">
                <div className="p-4 border-b border-[#e8ebed]">Signature</div>
                <div className="flex flex-col gap-2">
                  <CustomImageFile htmlFor="photo-upload">
                    <div className="border-2 border-gray-400 w-[300px] h-[191px] flex justify-center items-center p-5">
                      {signatureDataURL ? (
                        <div className="flex flex-col gap-3">
                          <div className="relative rounded-2xl overflow-hidden shadow-sm w-[150px] h-[120px]">
                            <Image
                              src={signatureDataURL}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <span
                            onClick={() => setSignatureDataURL("")}
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
                      id="photo-upload"
                      accept=".png, .jpeg, .jpg"
                      name="photo-upload"
                      type={"file"}
                      ref={signatureFileRef}
                      onChange={signatureHandler}
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
                    Max. size : 250KB
                  </span>
                </div>
              </div> */}
            </div>

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
                    Submit
                  </span>
                  <div className="w-4 h-4 flex justify-center items-center rounded-full border-white border">
                    <VscSaveAs color="#ffffff" className="text-md font-thin" />
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

export default FileUpload;
