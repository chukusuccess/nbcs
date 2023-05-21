import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function SplashText() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 0.4, delay: 1 },
      }}
      className="flex flex-col items-center justify-center text-white"
    >
      <Image src="/africa.png" width={100} height={100} />
      <h1 className="xl:text-9xl 2xl:text-[160px] lg:text-8xl md:text-7xl text-[100px] font-semibold nbcs">
        NBCS
      </h1>
    </motion.div>
  );
}

export default SplashText;
