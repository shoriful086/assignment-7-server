import { Button, Container, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/authApi/auth.api";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/fetaures/authSlice/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Account Login", { duration: 2000 });
    try {
      const loginDetails = {
        userName: data.userName,
        email: data.email,
        password: data.password,
      };
      const res = await login(loginDetails).unwrap();
      await dispatch(setUser({ token: res?.token }));

      if (res) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
        navigate("/");
      }
    } catch (error) {
      toast.error("invalid email or password");
    }
  };
  return (
    <Container>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center p-2">
        <Typography variant="h6">Sign In</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:max-w-[60%] lg:max-w-[30%] shadow-lg p-10 rounded-md border-1 border-gray-200"
        >
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
            Sign In
          </Button>

          <div className="mt-5">
            <Typography>
              Are You New?
              <Link className="text-red-500" to="/register">
                {" "}
                Create Account
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
