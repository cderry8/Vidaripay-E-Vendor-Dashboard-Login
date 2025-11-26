"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();


  const handleLoginRedirect = () => {
    router.push("/login");
  };
  const handleTransactionRedirect = () => {
    router.push("/transaction")
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center z-50  px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" p-8 rounded-lg shadow-lg w-full z-50 bg-white max-w-lg text-center">
        <motion.h1
          className="text-4xl font-extrabold text-[#171717] mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome
        </motion.h1>
        <motion.p
          className="text-lg text-[#555] mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          This is js a landing page to access the login page or transaction page click below
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            text="Go to Transaction"
            onClick={handleTransactionRedirect}
            icon={<span className="text-lg">&#8594;</span>}
            iconPosition="right"
            size="large"
            className="w-full mb-4 bg-[#d6670e] hover:bg-[#c85b0b] transition duration-300"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            text="Go to Login"
            onClick={handleLoginRedirect}
            icon={<span className="text-lg">&#8594;</span>}
            iconPosition="right"
            size="large"
            className="w-full bg-[#d6670e] hover:bg-[#c85b0b] transition duration-300"
          />
        </motion.div>

      </div>
    </motion.div>
  );
}
