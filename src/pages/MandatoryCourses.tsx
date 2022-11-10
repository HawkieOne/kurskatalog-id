import React from 'react'
import Title from '../components/Title'
import Table from '../components/Table'
import { courses } from '../shared/data'
import { TitleVariant } from '../shared/constants'

const courses_DV = courses.filter(course => {
  return course.subject === 'DV';
});
const courses_MA = courses.filter(course => {
  return course.subject === 'MA';
});
const courses_TF = courses.filter(course => {
  return course.subject === 'TF';
});
const courses_EL = courses.filter(course => {
  return course.subject === 'EL';
});
const courses_PS = courses.filter(course => {
  return course.subject === 'PS';
});
const courses_MS = courses.filter(course => {
  return course.subject === 'MS';
});
const courses_ID = courses.filter(course => {
  return course.subject === 'ID';
});

export default function MandatoryCourses() {


  return (
    <div className='h-full bg-white flex flex-col items-center'>
      <div className='w-1/2 text-center'>
        <div className='p-4'>
          <Title>Matematik</Title>
          <Table courses={courses_MA} />
        </div>
        <div className='p-4'>
          <Title>Datavetenskap</Title>
          <Table courses={courses_DV} />
        </div>
        <div className='p-4'>
          <Title>Teknik för interaktion</Title>
          <Table courses={courses_TF} />
        </div>
        <div className='p-4'>
          <Title>Medieteknik</Title>
          <Table courses={courses_EL} />
        </div>
        <div className='p-4'>
          <Title>Psykologi</Title>
          <Table courses={courses_PS} />
        </div>
        <div className='p-4'>
          <Title>Datavetenskap</Title>
          <Table courses={courses_MS} />
        </div>
        <div className='p-4'>
          <Title>IndustriDesign</Title>
          <Table courses={courses_ID} />
        </div>
      </div>
    </div>
  )
}
