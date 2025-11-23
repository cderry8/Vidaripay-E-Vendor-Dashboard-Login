"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import LoginForm from "@/components/form/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#f7f9fb] to-[#f7f9fb]"
      initial={{ opacity: 0, y: 50 }} // Initial position and opacity
      animate={{ opacity: 1, y: 0 }} // Final position and opacity
      transition={{ duration: 0.8, ease: "easeOut" }} // Added easing for a smoother feel
    >
      <motion.div
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl z-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }} 
      >
        <LoginForm />
        <div className="space-y-3 mt-3">
          <div
            className="text-center"
           
          >
            <a href="#" className="text-[#4dc04a] text-sm hover:underline">
              Forgot your password?
            </a>
          </div>

          <div
            className="text-center"
           
          >
            <span>New to Vidari? </span>
            <a
              href="/signup"
              className="text-[#4dc04a] text-sm hover:underline"
            >
              Create an account
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
