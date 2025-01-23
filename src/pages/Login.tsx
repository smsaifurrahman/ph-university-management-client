/** @format */

import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   // const { register, handleSubmit } = useForm({
   //    defaultValues: {
   //       userId: "A-0001",
   //       password: "admin123",
   //    },
   // });

   const defaultValues = {
            userId: "2025010001",
            password: "student123",
         }

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
      <Row justify="center" align={"middle"} style={{ height: "100vh" }}>
         <PHForm onSubmit={onSubmit} defaultValues={defaultValues}  >
            <PHInput type={"text"} name="userId" label={"Id"} />

            <PHInput type={"password"} name={"password"} label={"Password"} />

            <Button htmlType="submit">Login</Button>
         </PHForm>
      </Row>
   );
};

export default Login;
