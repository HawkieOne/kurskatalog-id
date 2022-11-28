import React from "react";
import { FontVariants, TextVariant, AlignVariants } from "../../shared/constants";
import Text from "../Text";

interface CoursesContainerProps {
  children: React.ReactNode;
}

export default function CoursesContainer({ children }: CoursesContainerProps) {
  return (
    <div className="h-full w-full flex flex-col text-onyx">
      <Text size={TextVariant.medium} font={FontVariants.bold} align={AlignVariants.center}>
        Valda kurser
      </Text>
      <div className=" flex flex-wrap gap-3 h-5/6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
