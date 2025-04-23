// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.push("/login");
    }, 1500);
  }, [router]);
  return (
    <div className="h-svh md:min-h-screen  max-w-4xl mx-auto flex flex-col gap-4 justify-center py-16 ">
      <motion.div
        initial={{ opacity: 0 ,y:100 }}
        animate={{ opacity: 1 ,y:0}}
        transition={{ duration: 0.5,ease: 'easeInOut' }}
        className="self-center"
      >
        <Image
          style={{
            textShadow: " 6px 6px 4px 0px #FFF20066",
          }}
          className=" md:w-60 md:h-60  2xl:h-90 2xl:w-90"
          src="/images/Chupa-Chups.png"
          width={250}
          height={250}
          alt=" Chupa-Chups logo"
          priority={true}
        />
      </motion.div>
    </div>
  );
};

export default Home;
