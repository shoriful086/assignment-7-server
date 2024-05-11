/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, TableCell, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateReliefMutation } from "../../../redux/api/reliefApi/relief.api";

const pencil = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-8 lg:size-10 bg-green-500 text-white rounded p-1 lg:p-2 cursor-pointer"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    />
  </svg>
);

const UpdateSupplyModal = (item: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updateSupply] = useUpdateReliefMutation();

  const { handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const modalDetails = {
      title: data.title,
      category: data.category,
      image: data.image,
      amount: data?.amount,
      description: data?.description,
    };

    const res = await updateSupply({
      id: item?.item._id,
      data: modalDetails,
    }).unwrap();

    if (res) {
      toast.success(res?.data.message);
      handleClose();
    }
  };

  return (
    <div className="p-4">
      <TableCell
        onClick={handleOpen}
        sx={{
          width: 40,
          borderRadius: "10px",
        }}
      >
        {pencil}
      </TableCell>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex border-none w-[95%] md:w-[60%] lg:w-[40%]  bg-white mx-auto shadow rounded-lg p-4 my-20 ">
          <div className="w-full mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col mx-auto md:max-w-[90%] lg:max-w-[100%] bg-white shadow-2xl p-10 rounded"
            >
              <Typography
                fontSize={20}
                fontWeight={500}
                sx={{
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Update Supply
              </Typography>

              <Button
                type="submit"
                sx={{
                  width: "100%",
                  mt: "20px",
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateSupplyModal;
