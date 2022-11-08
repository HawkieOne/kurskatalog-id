import React from 'react'
import Title from '../components/Title'
import Table from '../components/Table'

export default function MandatoryCourses() {
  const courses = [
    {
      "name": "NAME OF COURSE",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      "pace": 50,
      "startDate": 20221101,
      "endDate": 20230115,
      "points": 7.5,
      "location": "UMEÅ",
      "studyForm": "normal",
      "code": "5TF061",
      "link": "www.gooogle.com",
      "letter": "www.google.com"
    },
    {
      "name": "NAME OF COURSE",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      "pace": 50,
      "startDate": 20221101,
      "endDate": 20230115,
      "points": 7.5,
      "location": "UMEÅ",
      "studyForm": "normal",
      "code": "5TF061",
      "link": "www.gooogle.com",
      "letter": "www.google.com"
    },
    {
      "name": "NAME OF COURSE",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dictum sollicitudin. Maecenas a massa augue. Etiam ut vehicula dui, et egestas neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nisl urna. Curabitur ut sem maximus, commodo nisl sit amet, placerat nibh. Vestibulum tempor tortor eget velit porttitor, ut aliquam nisl tempus. Donec venenatis vehicula bibendum. In quis lorem elementum risus faucibus ullamcorper id at justo. Aenean et ultrices velit. ",
      "pace": 50,
      "startDate": 20221101,
      "endDate": 20230115,
      "points": 7.5,
      "location": "UMEÅ",
      "studyForm": "normal",
      "code": "5TF061",
      "link": "www.gooogle.com",
      "letter": "www.google.com"
    },
  ]

  return (
    <div className='h-full bg-white flex flex-col items-center'>
      <div className='w-1/2 text-center'>
        <div className='p-4'>
          <Title>Matematik</Title>
          <Table courses={courses} />
        </div>
        <div className='p-4'>
          <Title>Datavetenskap</Title>
          <Table courses={courses} />
        </div>
      </div>
    </div>
  )
}
