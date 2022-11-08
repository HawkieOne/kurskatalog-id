import React from "react";
import Course from "../components/course/Course";
import Title from "../components/Title";
import { TitleVariant } from "../shared/constants";

export default function Courses() {
  const courses = [
    {
      name: "Interaktionsteknik",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      pace: 50,
      startDate: 20221101,
      endDate: 20230115,
      points: 7.5,
      location: "UMEÅ",
      studyForm: "normal",
      code: "5TF061",
      link: "www.gooogle.com",
      letter: "www.google.com",
      period: 1,
      rating: 1.5
    },
    {
      name: "Envariabel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      pace: 50,
      startDate: 20221101,
      endDate: 20230115,
      points: 7.5,
      location: "UMEÅ",
      studyForm: "normal",
      code: "5TF061",
      link: "www.gooogle.com",
      letter: "www.google.com",
      period: 1,
      rating: 2.5
    },
    {
      name: "Appjava",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      pace: 50,
      startDate: 20221101,
      endDate: 20230115,
      points: 7.5,
      location: "UMEÅ",
      studyForm: "normal",
      code: "5TF061",
      link: "www.gooogle.com",
      letter: "www.google.com",
      period: 1,
      rating: 3.5
    },
    {
      name: "NAME OF COURSE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      pace: 50,
      startDate: 20221101,
      endDate: 20230115,
      points: 7.5,
      location: "UMEÅ",
      studyForm: "normal",
      code: "5TF061",
      link: "www.gooogle.com",
      letter: "www.google.com",
      period: 1,
      rating: 2
    },
    {
      name: "NAME OF COURSE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      pace: 50,
      startDate: 20221101,
      endDate: 20230115,
      points: 7.5,
      location: "UMEÅ",
      studyForm: "normal",
      code: "5TF061",
      link: "www.gooogle.com",
      letter: "www.google.com",
      period: 1,
      rating: 5
    },
  ];
  return (
    <div className="h-full w-full bg-white flex flex-col items-center py-12 space-y-8">
      <Title size={TitleVariant.large}>Kurser</Title>
      <div className="w-3/4 flex flex-col items-center space-y-6">
        {courses.map((course, index) => (
          <Course course={course} key={index} />
        ))}
      </div>
    </div>
  );
}
