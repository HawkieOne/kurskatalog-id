import { Course } from "../shared/interfaces";

interface CourseProps {
    courses: Course[];
}

export default function Table({ courses }: CourseProps) {
    return (
        <div className="overflow-x-auto text-onyx">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className='bg-cream'>Kursnamn</th>
                        <th className='bg-cream'>Studietakt</th>
                        <th className='bg-cream'>Läsperiod</th>
                        <th className='bg-cream'>Poäng</th>
                        <th className='bg-cream'>Nivå</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <th className='bg-cream border-none'>{course.name}</th>
                            <td className='bg-cream border-none'>{course.pace}%</td>
                            <td className='bg-cream border-none'>{course.startDate}</td>
                            <td className='bg-cream border-none'>{course.points}hp</td>
                            <td className='bg-cream border-none'>{course.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
