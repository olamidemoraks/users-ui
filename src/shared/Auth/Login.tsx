import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";

type LoginProps = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long!"),
});

type LoginSchema = z.infer<typeof formSchema>;
const Login: React.FC<LoginProps> = ({ setActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    reset();
  };

  const [show, setShow] = useState(false);

  return (
    <div className="p-3">
      <br />
      <h1 className=" text-neutral-300 text-lg font-bold text-center">
        Login with{" "}
        <span className="font-bold text-xl">
          <span className=" text-neutral-300">Nutri</span>-
          <span
            className=" 
          text-pink-600"
          >
            Delivoo
          </span>
        </span>
      </h1>

      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col px-4 gap-3 pt-5">
          <div>
            <Input
              key={"email"}
              type="email"
              label="Email"
              placeholder="johndoe@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-pink-600">{errors.email.message}</span>
            )}
          </div>

          <div className="relative">
            <div
              onClick={() => setShow((prev) => !prev)}
              className="absolute right-0 top-0 z-10 h-full justify-center items-center flex pr-3 hover:text-pink-600 cursor-pointer"
            >
              {!show ? "show" : "hide"}
            </div>
            <Input
              key={"password"}
              type={show ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-pink-600">{errors.password.message}</span>
            )}
          </div>

          <span className=" text-pink-500 text-right cursor-pointer">
            Forgot your password
          </span>

          <button className="rounded-md p-3 bg-pink-600">Login</button>
          <br />

          <h5 className=" text-center  font-Poppins text-[14px] text-white">
            Or join with
          </h5>

          <div className="flex items-center justify-center">
            <FcGoogle size={30} className="cursor-pointer mt-2" />
          </div>

          <h5 className="text-center  font-Poppins text-[14px]">
            Don't have an account?
            <span
              className=" text-pink-600  pl-1 cursor-pointer"
              onClick={() => setActive("signup")}
            >
              Sign up
            </span>
            `
          </h5>
        </div>
      </form>
    </div>
  );
};
export default Login;
