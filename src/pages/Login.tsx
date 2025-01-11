/** @format */

import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";


const Login = () => {

    const {register, handleSubmit} = useForm({
        defaultValues: {
            userId: 'A-0002',
            password: 'admin123'
        }
    });
    const [Login, {data, error}] = useLoginMutation();
    console.log('data => ', data);
    console.log('error => ', error);
    const onSubmit = (data) => {
        console.log(data);
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        Login(userInfo);
    }

   return (
      <form onSubmit={handleSubmit(onSubmit)} >
         <div>
            <label htmlFor="id"> Id: </label>
            <input type="text" id="id" {...register('userId')} />
         </div>
         <div>
            <label htmlFor="password"> Password: </label>
            <input type="text" id="password" {...register('password')}  />
         </div>
         <Button htmlType="submit" >Login</Button>
      </form>
   );
};

export default Login;
