import { Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateCommunityPostMutation } from "../../redux/api/communityApi/community.api";
import toast from "react-hot-toast";

const CreatePostModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [createCommunityPost] = useCreateCommunityPostMutation();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const communityDetails = {
      title: data.title,
      description: data.description,
      comment: "",
    };
    // const res = createCommunityPost(communityDetails);
    const res = await createCommunityPost(communityDetails).unwrap();

    if (res) {
      toast.success(res.message);
    }
  };
  return (
    <div className=" w-full p-4 ">
      <input
        onClick={handleOpen}
        className="w-full  cursor-pointer border border-gray-300 p-2 my-2 mb-3 rounded-[30px]"
        type="text"
        placeholder="what's on your mind"
        id="post"
      />

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
                Create a post
              </Typography>

              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="">
                  Title
                </label>
                <input
                  className="w-full border border-gray-300 p-2 my-2 mb-3 rounded"
                  type="text"
                  placeholder="Title"
                  id="title"
                  {...register("title")}
                />
                <label className="text-lg font-medium" htmlFor="">
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  onClick={handleOpen}
                  className="w-full border border-gray-300 p-2 my-2 mb-3 rounded"
                  placeholder="what's on your mind"
                  id="description"
                />
              </div>

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

export default CreatePostModal;
