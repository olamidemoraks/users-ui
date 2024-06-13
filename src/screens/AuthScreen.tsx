import React, { useState } from "react";
import Login from "../shared/Auth/Login";
import Signup from "../shared/Auth/Signup";

type AuthScreenProps = {};

const AuthScreen: React.FC<AuthScreenProps> = () => {
  const [active, setActive] = useState("login");
  return (
    <div className="w-full fixed top-0 left-0 h-screen z-50 flex items-center  justify-center  backdrop-blur-sm">
      <div className="lg:w-[40%] md:w-[60%] w-[70%] min-h-[500px] bg-neutral-900 border border-neutral-800 rounded-lg ">
        {active === "login" && <Login setActive={setActive} />}
        {active === "signup" && <Signup setActive={setActive} />}
      </div>
    </div>
  );
};
export default AuthScreen;
