import { Course } from "../shared/interfaces";

interface CourseProps {
  courses: Course[];
}

export default function Table({ courses }: CourseProps) {
  return (
    <div className="overflow-x-auto grid grid-cols-5">
      <div className="bg-cream">Kursnamn</div>
      <div className="bg-cream">Studietakt</div>
      <div className="bg-cream">Läsperiod</div>
      <div className="bg-cream">Poäng</div>
      <div className="bg-cream">Nivå</div>
      <table className="table w-full">
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <th className="bg-cream border-none">{course.name}</th>
              <td className="bg-cream border-none">
                {course.pace ? course.pace + "%" : "??"}
              </td>
              <td className="bg-cream border-none">{course.startDate}</td>
              <td className="bg-cream border-none">{course.points}hp</td>
              <td className="bg-cream border-none">{course.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
