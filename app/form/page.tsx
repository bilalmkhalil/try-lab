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
import AnimatedFormErrorMessage from "@/components/AnimatedFormErrorMessage";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, User, Mail, UserCog } from "lucide-react";

const FormPage = () => {
  const [submitData, setSubmitData] = useState<FormTypes>({} as FormTypes);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    setSubmitData(data);
    setIsSubmitted(true);
  };

  const selectRole = watch("role");

  return (
    <div
      className="h-screen bg-white grid grid-cols-3 p-20 items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AnimatedFormElement delay={0.5}>
        <h1 className="mb-5 text-xl">Live Preview</h1>
        <pre className="bg-slate-800 text-white p-2 rounded-md">
          {JSON.stringify(watch(), null, 4)}
        </pre>
      </AnimatedFormElement>

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

      <AnimatedFormElement delay={0.5}>
        <Card className="shadow-none border-none">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span>Submission Result</span>
              {isSubmitted && (
                <Badge variant="outline" className="bg-green-100 text-green-800 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Submitted</span>
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(submitData).length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b pb-2">
                  <User className="h-4 w-4 text-slate-500" />
                  <span className="font-medium text-slate-700">Name:</span>
                  <span className="text-slate-900">{submitData.name}</span>
                </div>
                <div className="flex items-center gap-2 border-b pb-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="font-medium text-slate-700">Email:</span>
                  <span className="text-slate-900">{submitData.email}</span>
                </div>
                <div className="flex items-center gap-2 border-b pb-2">
                  <UserCog className="h-4 w-4 text-slate-500" />
                  <span className="font-medium text-slate-700">Role:</span>
                  <span className="capitalize text-slate-900">{submitData.role}</span>
                </div>
                {submitData.admincode && (
                  <div className="flex items-center gap-2 border-b pb-2">
                    <span className="font-medium text-slate-700">Admin Code:</span>
                    <span className="text-slate-900">{submitData.admincode}</span>
                  </div>
                )}
                {submitData.usercode && (
                  <div className="flex items-center gap-2 border-b pb-2">
                    <span className="font-medium text-slate-700">User Code:</span>
                    <span className="text-slate-900">{submitData.usercode}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500">
                Submit the form to see results here
              </div>
            )}
          </CardContent>
        </Card>
      </AnimatedFormElement>
    </div>
  );
};

export default FormPage;
