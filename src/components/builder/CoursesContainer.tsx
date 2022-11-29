import React from "react";
import { FontVariants, TextVariant, AlignVariants } from "../../shared/constants";
import Text from "../Text";

interface CoursesContainerProps {
  children: React.ReactNode;
}

export default function CoursesContainer({ children }: CoursesContainerProps) {
  return (
    <div className="h-full w-full flex flex-col text-onyx space-y-4">
      <Text size={TextVariant.medium} font={FontVariants.bold} align={AlignVariants.center}>
        Valda kurser
      </Text>
      <div className=" flex flex-wrap gap-3 overflow-y-auto bg-slate-50 p-5">
        {children}
      </div>
    </div>
  );
}
