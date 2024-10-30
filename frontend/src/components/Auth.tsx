import { Link, Navigate, useNavigate } from "react-router-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signupInput } from "@jayakrishnan_s/medium-common-app";
import { useState } from "react";
import axios from "axios";
import { formError, signUpResult } from "@/types/types";
import { BACKEND_URL } from "@/config";
import { ReloadIcon } from "@radix-ui/react-icons";
import useUserStore from "@/state/store";

function Auth() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [formdata, setFromData] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });

  console.log(formdata);

  const [formError, setFormError] = useState<formError>({
    field: "",
    message: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFromData({ ...formdata, [e.currentTarget.id]: e.currentTarget.value });
    setFormError({ ...formError, field: "", message: "" });
  };

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    const { success, error } = signupInput.safeParse(formdata);
    if (error) {
      setFormError({
        ...formError,
        field: (error.errors[0].path[0] as string) || "",
        message: error.errors[0].message,
      });
    }

    if (success) {
      try {
        const result = await axios.post(
          `${BACKEND_URL}/api/v1/auth/signup`,
          formdata
        );
        const data: signUpResult = result.data;
        if (data.status) {
          if (data.jwt) {
            localStorage.setItem("token", data.jwt);
            if (data.id) {
              setUser(data.id);
            }
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <div className=" w-full  lg:w-4/6 flex flex-col">
        <div className="flex flex-col items-center ">
          <h1 className="text-2xl md:text-3xl font-extrabold ">
            Create an Account
          </h1>
          <p className="pt-2 text-center  text-sm  md:text-lg text-slate-500">
            Already Have an account?{" "}
            <Link to={"/signin"} className="underline">
              Login
            </Link>
          </p>
          <div className="flex w-10/12  lg:w-9/12 flex-col justify-center mt-5 gap-3  ">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="Username" className="font-semibold text-lg">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="py-6  placeholder:text-lg"
                onChange={handleChange}
              />
              {formError.field === "name" && (
                <p className="text-sm font-medium leading-none text-red-600 pb-3">
                  {formError.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="Email" className="font-semibold text-lg">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="py-6  placeholder:text-lg"
                onChange={handleChange}
              />
              {formError.field === "email" && (
                <p className="text-sm font-medium leading-none text-red-600 pb-3">
                  {formError.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="Password" className="font-semibold text-lg">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="py-6  placeholder:text-lg"
                onChange={handleChange}
              />
              {formError.field === "password" && (
                <p className="text-sm font-medium leading-none text-red-600 pb-3">
                  {formError.message}
                </p>
              )}
            </div>
            <Button
              disabled={loading}
              onClick={handleSubmit}
              className="mt-4 py-6 "
            >
              {" "}
              {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
