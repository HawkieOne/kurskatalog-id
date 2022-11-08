import React from 'react'
import Title from '../components/Title'
import Table from '../components/Table'
import { courses } from '../shared/data'
import { TitleVariant } from '../shared/constants'

export default function MandatoryCourses() {
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
