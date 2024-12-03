"use client";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function User() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="mb-6">
        <Button
          className="text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 shadow-md px-4 py-2 rounded-lg transition-all duration-300"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Need an account? Create one"
            : "Already have an account? Login"}
        </Button>
      </div>
      <div className="w-full max-w-md">
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
