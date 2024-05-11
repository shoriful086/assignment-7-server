import { Button, Container, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/api/authApi/auth.api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();

  // handle register Submit
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Account Creating", { duration: 2000 });
    try {
      const registerDetails = {
        userName: data.userName,
        email: data.email,
        password: data.password,
      };
      const res = await createUser(registerDetails).unwrap();

      if (res) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
        navigate("/login");
      }
    } catch (error) {
      // Check if error has a data object and if data object has a message property

      toast.error("User Already Exists");
    }
  };

  return (
    <Container>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center p-2">
        <Typography variant="h6">Sign Up</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:max-w-[60%] lg:max-w-[30%] shadow-lg p-10 rounded-md border-1 border-gray-200"
        >
          <div className="flex flex-col">
            <label className="font-medium">User Name</label>
            <input
              className="border border-blue-500 p-2 my-2 rounded"
              type="text"
              id="userName"
              {...register("userName", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className="border border-blue-500 p-2 my-2 rounded"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
              className="border border-blue-500 p-2 mt-2 rounded"
              type="text"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <Button
            type="submit"
            sx={{
              width: "100%",
              mt: "20px",
            }}
          >
            Sign Up
          </Button>

          <div className="mt-5">
            <Typography>
              Already Have an Account?
              <Link className="text-red-500" to="/login">
                {" "}
                Login Now
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
