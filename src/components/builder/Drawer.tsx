import React from "react";

interface DrawerProps {
  side: "left" | "right";
  refPointer: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}

export default function Drawer({ side, refPointer, children }: DrawerProps) {
  return (
    <div
      className={`max-h-screen overflow-y-auto inset-y-0 absolute bg-white shadow-lg p-3 ${
        side === "left" ? "left-0" : "right-0"
      } flex flex-col space-y-2`}
      ref={refPointer}
    >
        {children}
    </div>
  );
}
