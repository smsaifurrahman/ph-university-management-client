/** @format */

import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";

type TInputProps = {
   type: string;
   name: string;
   label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
   console.log(name);

   return (
      <div style={{ marginBottom: "20px" }}>
         
         <Controller
            name={name}
            render={({ field }) => (
               <Form.Item label={label}>
                  <Input {...field} type={type} id={name} size="large" />
               </Form.Item>
            )}
         />
      </div>
   );
};

export default PHInput;
