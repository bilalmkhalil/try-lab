"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

const schema = yup.object({
  name: yup.string().required("Please enter name!"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Please enter email!"),
  role: yup.string().required("Please select role!"),

  // Additional Fields based on selected role
  admincode: yup.string().when("role", {
    is: (val: string) => val === "admin",
    then: (schema: any) => schema.required("Please provide admin code"),
  }),
  usercode: yup.string().when("role", {
    is: (val: string) => val === "user",
    then: (schema: any) => schema.required("Please provide user code"),
  }),
});

type FormTypes = {
  name: string;
  email: string;
  role: string;
  admincode?: string;
  usercode?: string;
};

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormTypes> = (data) => console.log(data);

  const selectRole = watch("role");

  return (
    <div
      className="h-screen bg-white grid grid-cols-3 p-20 items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h1 className="mb-5 text-xl">Live Preview</h1>
        <pre>{JSON.stringify(watch(), null, 4)}</pre>
      </div>

      <form className="w-10/12 flex gap-3 flex-col m-auto">
        <Input placeholder="name" {...register("name")} />
        <p className="text-red-500">{errors.name?.message}</p>

        <Input type="email" placeholder="email" {...register("email")} />
        <p className="text-red-500">{errors.email?.message}</p>

        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        <p className="text-red-500">{errors.role?.message}</p>

        {selectRole === "admin" && (
          <>
            <Input
              type="admincode"
              placeholder="Admin Code"
              {...register("admincode")}
            />
            <p className="text-red-500">{errors.admincode?.message}</p>
          </>
        )}

        {selectRole === "user" && (
          <>
            <Input
              type="usercode"
              placeholder="User Code"
              {...register("usercode")}
            />
            <p className="text-red-500">{errors.usercode?.message}</p>
          </>
        )}

        <Button type="submit"> Submit </Button>
      </form>
    </div>
  );
};

export default FormPage;
