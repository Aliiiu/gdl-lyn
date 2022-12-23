import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsDownload } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
import { FormTextField } from "../Widgets/Form/Form";
import emailjs from "@emailjs/browser";
import useLoading from "../../hooks/useLoading";

const ExecutiveGuide = () => {
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
    <section className="w-5/6 bg-slate-200 shadow-xl md:w-3/6 mx-auto">
      {!showNext ? (
        <div className=" bg-white p-4 xl:p-10 rounded-lg">
          <p className="mb-3 text-center font-light">
            Please fill out the form below and we will get back to you as soon
            as possible.
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
              error={formState.errors.phone_no}
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
        <div className=" bg-white p-10 text-center rounded-lg">
          <h2 className="mb-3 text-2xl font-light">Congratulations</h2>
          <p className="mb-4">
            Kindly click the link below to download this ebook
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
              onClick={() => setShowNext(false)}
              className="text-white mx-auto py-2 px-4 rounded-lg flex items-center gap-2 bg-primary"
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

export default ExecutiveGuide;
