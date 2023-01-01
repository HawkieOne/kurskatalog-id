import React from "react";
import Text from "../../components/Text";

interface CourseInfoIconProps {
  icon: React.ReactNode;
  text?: string;
}

export default function CourseInfoIcon({ icon, text }: CourseInfoIconProps) {
  return (
    <div className="flex space-x-4 items-center">
      {icon}
      {text && <Text>{text}</Text>}
    </div>
  );
}
