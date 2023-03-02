import React from "react";
import { motion } from "framer-motion"

interface DrawerProps {
  side: "left" | "right";
  refPointer: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}

export default function Drawer({ side, refPointer, children }: DrawerProps) {
  
  return (
    <motion.div
      key={"drawer" + side}
      initial={{ x: side === "left" ? -350 : 350 }}
      animate={{ x: 0 }}
      transition={{ ease: "linear" }}
      exit={{ x: side === "left" ? -350 : 350 }}
      layout
      className={`h-100 overflow-y-auto inset-y-0 absolute bg-white text-onyx shadow-lg ${side === "left" ? "left-0 w-96" : "right-0 w-80"
        } flex flex-col z-30 print:hidden dark:bg-darkMode dark:text-white`}
      ref={refPointer}
    >
      {children}
    </motion.div>
  )
}
