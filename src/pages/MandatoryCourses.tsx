import Table from '../components/Table'
import Title from '../components/Title'
import { subjects } from '../shared/data'
import coursesJson from '../data/courses.json'
import mandatoryCoursesJson from '../data/mandatoryCourses.json'

import { Course } from '../shared/interfaces'

export default function MandatoryCourses() {

  const selectedCourses = (subject: string) => {
    const courseCodes = mandatoryCoursesJson.filter(course => {
      return course.subject === subject;
    });
    const allowedCourses = coursesJson.filter(course => courseCodes.find(e => e.code === course.code)) as Course[];
    return allowedCourses;
  };

  return (
    <div className='h-full bg-white flex flex-col items-center'>
      <div className='w-1/2 text-center'>

        {subjects.map((subject, index) => {
          const allowedCourses = selectedCourses(subject);
          return (
            <div className='p-4' key={index}>
              <Title>{subject}</Title>
              <Table courses={allowedCourses} />
            </div>
          );
        })}
      </div>
    </div>
  )
}
