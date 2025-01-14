/** @format */

import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { register, handleSubmit } = useForm({
      defaultValues: {
         userId: "A-0001",
         password: "admin123",
      },
   });
   const [login] = useLoginMutation();
   // console.log('data => ', data);
   // console.log('error => ', error);
   const onSubmit = async (data: FieldValues) => {
      const toastId = toast.loading("Logging in");

      try {
         const userInfo = {
            id: data.userId,
            password: data.password,
         };

         console.log(userInfo);

         const res = await login(userInfo).unwrap();
         console.log(res);

         const user = verifyToken(res.data.accessToken) as TUser;

         dispatch(setUser({ user: user, token: res.data.accessToken }));
         toast.success("logged in", { id: toastId, duration: 1000 });
         navigate(`/${user.role}/dashboard`);
         console.log("res =>", res.data.accessToken);
      } catch (err) {
         console.log(err);
         toast.error("Something went wrong", { id: toastId, duration: 1000 });
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <label htmlFor="id"> Id: </label>
            <input type="text" id="id" {...register("userId")} />
         </div>
         <div>
            <label htmlFor="password"> Password: </label>
            <input type="text" id="password" {...register("password")} />
         </div>
         <Button htmlType="submit">Login</Button>
      </form>
   );
};

export default Login;
