/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateDonateMutation } from "../../../redux/api/donateApi/donate.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DonateModal = (item: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [createDonate] = useCreateDonateMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const modalDetails = {
      name: data.name,
      email: data.email,
      image: item?.data.image,
      title: item?.data?.title,
      category: item?.data?.category,
      amount: item?.data?.amount,
    };

    const res = await createDonate(modalDetails).unwrap();
    if (res) {
      toast.success(res?.message);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Donate</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" border-1  shadow-lg px-4 ">
          <div className="lg:w-[35%] p-2 mx-auto my-10">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Donate And Help Us
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col mx-auto md:max-w-[60%] lg:max-w-[100%] bg-white shadow-lg p-10 rounded"
            >
              <div className="flex flex-col">
                <label className="font-medium">Name</label>
                <input
                  className="border border-blue-500 p-2 my-2 rounded"
                  type="name"
                  id="name"
                  {...register("name", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium">Email</label>
                <input
                  className="border border-blue-500 p-2 mt-2 rounded"
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                />
              </div>

              <h1 className="mt-6 mb-3 text-lg font-medium">Donate Details</h1>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <img
                    className="w-24 h-16 rounded-lg"
                    src={item?.data?.image}
                    alt=""
                    {...register("image")}
                  />
                </div>
                <div className="flex flex-col">
                  <p {...register("title")} className="font-medium ">
                    {item?.data?.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Category</label>
                <input
                  className="border border-blue-500 p-2 mt-2  mb-2 rounded"
                  type="category"
                  id="category"
                  {...register("category")}
                  disabled
                  defaultValue={item?.data?.category}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Amount</label>
                <input
                  className="border border-blue-500 p-2 mt-2  rounded"
                  type="amount"
                  id="amount"
                  {...register("amount")}
                  disabled
                  defaultValue={item?.data?.amount}
                />
              </div>

              <Button
                type="submit"
                sx={{
                  width: "100%",
                  mt: "20px",
                }}
              >
                Donate
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DonateModal;
