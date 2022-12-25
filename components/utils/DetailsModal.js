import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsDownload } from "react-icons/bs";
import { FormTextField } from "../Widgets/Form/Form";
import emailjs from "@emailjs/browser";
import useLoading from "../../hooks/useLoading";
import ClipLoader from "react-spinners/ClipLoader";
import { GiBookmarklet } from "react-icons/gi";

const DetailsModal = props => {
  const { handleSubmit, formState, register, control } = useForm({
    mode: "onChange",
  });
  const [showNext, setShowNext] = useState(false);
  const { loading, startLoading, stopLoading } = useLoading();

  const onSubmit = data => {
    console.log(data);
    startLoading();
    emailjs
      .send(
        "service_9z472fn",
        "template_yf2rs4g",
        { ...data },
        "45DpXFvmZLKlgyjgW"
      )
      .then(
        result => {
          // toast.success("Data sent successfully");
          console.log(result);
          setShowNext(true);
        },
        error => {
          toast.error(error.text);
          console.error(error);
        }
      )
      .finally(() => {
        stopLoading();
      });
  };

  return (
    <section className="w-5/6 mx-auto">
      {!showNext ? (
        <div className=" bg-white p-4 xl:p-10 rounded-lg">
          <h3 className="font-semibold text-center text-xl">
            Download The Executive Guide To Wealth Preservation{" "}
          </h3>
          <p className="mb-3 text-center font-light">
            Please fill out the form below to gain access to the free guide.
          </p>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormTextField
              label="Name"
              name="name"
              control={control}
              error={formState.errors.name}
              {...register("name", { required: true })}
            />
            <FormTextField
              label="Phone"
              name="phone"
              type="number"
              control={control}
              error={formState.errors.phone}
              {...register("phone", { required: true })}
            />
            <FormTextField
              label="Email"
              name="email"
              control={control}
              error={formState.errors.email}
              {...register("email", { required: true })}
            />
            <div className="flex justify-center">
              <button
                disabled={loading}
                type="submit"
                className="bg-[#992333] px-4 flex py-2 items-center gap-1 rounded-[14px] disabled:cursor-not-allowed disabled:bg-opacity-70 text-white"
              >
                {loading ? (
                  <ClipLoader className="mx-auto" size={20} color="#FFFFFF" />
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className=" bg-white p-10 rounded-lg">
          <h2 className="mb-3 text-2xl font-light">Access Granted</h2>
          <p className="mb-4">
            Kindly click the link below to download the free guide{" "}
            <GiBookmarklet className="text-primary inline-block text-lg" />
          </p>
          <a
            href={
              "https://drive.google.com/file/d/1BouUgPjEayLB_yX7fgYeV1sxS_62jpPw/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button
              onClick={props.onClose}
              className="text-white py-2 px-4 rounded-lg flex items-center gap-2 bg-primary"
            >
              <BsDownload className="text-white text-lg" />
              Download File
            </button>
          </a>
        </div>
      )}
    </section>
  );
};

export default DetailsModal;
