"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { FormSchema } from "@/schemas/schemas";
import { FormTypes } from "@/types/types";
import AnimatedFormElement from "@/components/AnimatedFormElement";
import { motion } from "motion/react";
import AnimatedFormErrorMessage from "@/components/AnimatedFormErrorMessage";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(FormSchema),
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
        <AnimatedFormElement delay={0.1}>
          <Input placeholder="name" {...register("name")} />
          {errors.name?.message && (
            <AnimatedFormErrorMessage message={errors.name?.message} />
          )}
        </AnimatedFormElement>

        <AnimatedFormElement delay={0.2}>
          <Input type="email" placeholder="email" {...register("email")} />
          {errors.email?.message && (
            <AnimatedFormErrorMessage message={errors.email?.message} />
          )}
        </AnimatedFormElement>

        <AnimatedFormElement delay={0.3}>
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
          {errors.role?.message && (
            <AnimatedFormErrorMessage message={errors.role?.message} />
          )}
        </AnimatedFormElement>

        {selectRole === "admin" && (
          <AnimatedFormElement delay={0.1}>
            <Input
              type="admincode"
              placeholder="Admin Code"
              {...register("admincode")}
            />
            {errors.admincode?.message && (
              <AnimatedFormErrorMessage message={errors.admincode?.message} />
            )}
          </AnimatedFormElement>
        )}

        {selectRole === "user" && (
          <AnimatedFormElement delay={0.1}>
            <Input
              type="usercode"
              placeholder="User Code"
              {...register("usercode")}
            />
            {errors.usercode?.message && (
              <AnimatedFormErrorMessage message={errors.usercode?.message} />
            )}
          </AnimatedFormElement>
        )}

        <AnimatedFormElement delay={0.4}>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </AnimatedFormElement>
      </form>
    </div>
  );
};

export default FormPage;
