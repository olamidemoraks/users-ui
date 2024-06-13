import { REGISTER_USER } from "@/src/graphql/actions/register.action";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";

type SignupProps = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 character long!"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long!"),
  phone_number: z
    .number()
    .min(11, "Phone number must be at least 10 character"),
});

type SignupSchema = z.infer<typeof formSchema>;
const Signup: React.FC<SignupProps> = ({ setActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupSchema>({
    resolver: zodResolver(formSchema),
  });

  const [show, setShow] = useState(false);

  const [registerUserMutation, { loading }] = useMutation(REGISTER_USER);

  const onSubmit = async (data: SignupSchema) => {
    try {
      const response = await registerUserMutation({ variables: data });
      console.log(response);
      localStorage.setItem("activation_token", response.data.register.token);
      toast.success("Please check your email to activate your account");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-3">
      <br />
      <h1 className=" text-neutral-300 text-lg font-bold text-center">
        Sigup with{" "}
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
              key={"name"}
              type="text"
              label="Name"
              placeholder="John Doe"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-pink-600">{errors.name.message}</span>
            )}
          </div>
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

          <div>
            <Input
              key={"phone_number"}
              type="text"
              label="phone_number"
              placeholder="+234 **** *****"
              {...register("phone_number", { valueAsNumber: true })}
            />
            {errors.phone_number && (
              <span className="text-pink-600">
                {errors.phone_number.message}
              </span>
            )}
          </div>
          <div>
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
            </div>
            {errors.password && (
              <span className="text-pink-600">{errors.password.message}</span>
            )}
          </div>

          <Button
            isLoading={loading}
            type="submit"
            className="rounded-md p-3 bg-pink-600"
          >
            Sign up
          </Button>
          <br />

          <h5 className=" text-center  font-Poppins text-[14px] text-white">
            Or join with
          </h5>

          <div className="flex items-center justify-center">
            <FcGoogle size={30} className="cursor-pointer mt-2" />
          </div>

          <h5 className="text-center  font-Poppins text-[14px]">
            Already have an account?
            <span
              className=" text-pink-600  pl-1 cursor-pointer"
              onClick={() => setActive("login")}
            >
              Login
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};
export default Signup;
