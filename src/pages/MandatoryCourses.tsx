import Table from '../components/Table'
import Title from '../components/Title'
import { courses, mandatoryCourses, subjects } from '../shared/data'
import { Course } from '../shared/interfaces'

export default function MandatoryCourses() {

  const selectedCourses = (subject: string) => {
    const courseCodes = mandatoryCourses.filter(course => {
      return course.subject === subject;
    });
    const allowedCourses = courses.filter(course => courseCodes.find(e => e.code === course.code)) as Course[];
    return allowedCourses;
  };

  return (
    <div className='h-full bg-white flex flex-col items-center'>
      <div className='w-1/2 text-center'>

        {subjects.map((subject) => {
          const allowedCourses = selectedCourses(subject.subject);
          return (
            <div className='p-4'>
              <Title>{subject.subject}</Title>
              <Table courses={allowedCourses} />
            </div>
          );
        })}
      </div>
    </div>
  )
}
