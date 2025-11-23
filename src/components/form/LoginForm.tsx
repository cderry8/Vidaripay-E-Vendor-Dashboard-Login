"use client"; 
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../ui/InputField"; 
import Button from "../ui/Button";
import { FiArrowRight } from "react-icons/fi"; 
import { LoginFormData } from "@/types/auth";  

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
}).required();

const LoginForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false); // Track successful login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: LoginFormData) => {
    console.log("Logged in with:", data);
    setIsSuccess(true); // Set success state to true upon successful login
  };

  return (
    <form
      className="flex flex-col space-y-6 p-6 max-w-md mx-auto w-full sm:max-w-sm lg:max-w-md"
      onSubmit={handleSubmit(handleLogin)}
    >
    
    

      <h2 className="text-3xl text-[#020817] font-semibold text-center">Login</h2>

      {/* this is js a logging message as we got no api's for logging in */}

      {isSuccess && ( <p className="text-[#4dc04a] font-bold text-center text-lg"> 🎉 Successful Login! 🚀 </p> )}

      <div className="relative">
        <InputField
          placeholder="Email"
          type="email"
          className={`focus:outline-none ${errors.email ? "border-red-500" : "border-[#e0e7ff]"}`}
          {...register("email")} 
        />
        {errors.email && (
          <span className="text-red-500 text-sm absolute mt-1 mb-2 left-0">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="relative">
        <InputField
          placeholder="Password"
          type="password"
          className={`focus:outline-none ${errors.password ? "border-red-500" : "border-[#e0e7ff]"}`}
          {...register("password")} 
        />
        {errors.password && (
          <span className="text-red-500 text-sm absolute mt-1 mb-2 left-0">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          text="Login"
          onClick={() => {}}
          icon={<FiArrowRight />}
          iconPosition="right"
          size="medium"
        />
      </div>
    </form>
  );
};

export default LoginForm;
