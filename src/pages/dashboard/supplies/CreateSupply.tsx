import { Button, Container, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateReliefMutation } from "../../../redux/api/reliefApi/relief.api";

const CreateSupply = () => {
  const { register, handleSubmit } = useForm();
  const [createRelief] = useCreateReliefMutation();

  // handle register Submit
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Supply Creating", { duration: 2000 });
    try {
      const reliefDetails = {
        title: data.title,
        image: data.image,
        category: data.category,
        amount: data.amount,
        description: data.description,
      };

      const res = await createRelief(reliefDetails).unwrap();

      if (res) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <section className=" m-4 lg:ml-52 ">
        <div className=" w-full h-[100vh] flex flex-col justify-center items-center p-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:max-w-[60%] lg:max-w-[70%] bg-white shadow-lg p-10 rounded-md border-1 border-gray-200"
          >
            <Typography
              sx={{
                textAlign: "center",
              }}
              variant="h6"
            >
              Create Supplies
            </Typography>

            <div className="flex flex-col">
              <label className="font-medium">Title</label>
              <input
                className="border border-blue-500 p-2 my-2 mb-3 rounded"
                type="text"
                id="title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Image Link</label>
              <input
                className="border border-blue-500 p-2 my-2 mb-3 rounded"
                type="text"
                id="image"
                {...register("image", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Category</label>
              <input
                className="border border-blue-500 p-2 mt-2 mb-3 rounded"
                type="text"
                id="category"
                {...register("category", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Amount</label>
              <input
                className="border border-blue-500 p-2 mt-2 mb-3 rounded"
                type="number"
                id="amount"
                {...register("amount", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Description</label>
              <textarea
                className="border border-blue-500 p-2 mt-2 mb-3 rounded"
                id="description"
                {...register("description", { required: true })}
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
      </section>
    </Container>
  );
};

export default CreateSupply;
