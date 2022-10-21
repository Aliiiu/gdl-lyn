import Image from "next/image";
import React, { useState } from "react";
import { CustomImageFile } from "../../../pages/file-upload";

const CustomImageInput = ({ label, size, imageFileRef }) => {
  const [signatureDataURL, setSignatureDataURL] = useState("");
  const [error, setError] = useState("");
  const signatureHandler = e => {
    setError("");
    const imagefile = signatureFileRef.current?.files;
    // console.log(imagefile);
    if (imagefile?.length) {
      const imageData = new FormData();
      Object.values(imagefile).forEach(file => {
        if (file.size < 250000) {
          imageData.append("display_picture", file);
          let fileReader = new FileReader();
          fileReader.onloadend = () => {
            setSignatureDataURL(fileReader.result);
          };
          fileReader.readAsDataURL(file);
        } else {
          setSignatureDataURL("");
          setError("File too large");
        }
      });
    }
  };
  return (
    <div className="bg-rose-100 border border-[#e8ebed]">
      <div className="p-4 border-b border-[#e8ebed]">{label}</div>
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
            ref={imageFileRef}
            onChange={signatureHandler}
            className="dp_wrapper"
            multiple
          />
        </CustomImageFile>
        {error && <h5 className="text-red-500 ml-[90px] text-sm">{error}</h5>}
        <span className="text-gray-400 font-thin text-xs">
          Accepted file type: .PNG .JPG, .JPEG
        </span>
        <span className="text-gray-400 font-thin text-xs">
          {" "}
          Max. size : {size || "250KB"}
        </span>
      </div>
    </div>
  );
};

export default CustomImageInput;
