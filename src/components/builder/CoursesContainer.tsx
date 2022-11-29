import React from "react";
import {
  FontVariants,
  TextVariant,
  AlignVariants,
} from "../../shared/constants";
import Text from "../Text";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

interface CoursesContainerProps {
  onAddCourses: () => void;
  children: React.ReactNode;
}

export default function CoursesContainer({
  children,
  onAddCourses,
}: CoursesContainerProps) {
  return (
    <div className="basis-1/2 w-full p-5 flex flex-col text-onyx space-y-4 bg-slate-50 relative">
      <Text
        size={TextVariant.medium}
        font={FontVariants.bold}
        align={AlignVariants.center}
      >
        Kurser
      </Text>
      <div className=" flex flex-wrap gap-3">{children}</div>
      <div
        className="absolute top-0 right-5 btn btn-ghost"
        onClick={onAddCourses}
      >
        <AiOutlineAppstoreAdd size="2em" />
      </div>
    </div>
  );
}
