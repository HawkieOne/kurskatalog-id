import React from 'react'

export default function MandatoryCourses() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-1/2'>
        <h1 className='text-center text-4xl'>Matematik</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Kursnamn</th>
                <th>Studietakt</th>
                <th>Läsperiod</th>
                <th>Poäng</th>
                <th>Nivå</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Affärsmässig tjänstedesign och teknikutveckling</th>
                <td>25%</td>
                <td>HT 2022 period 1-2</td>
                <td>7.5hp</td>
                <td>Avancerad</td>
              </tr>
              <tr>
              <th>Aktuell utveckling inom Interaktionsteknik och design</th>
                <td>25%</td>
                <td>VT 2023 period 3-4</td>
                <td>9.0hp</td>
                <td>Avancerad</td>
              </tr>
              <tr>
              <th>Användarcentrerad interaktionsdesign</th>
                <td>100%</td>
                <td>HT 2022 period 1</td>
                <td>7.5hp</td>
                <td>Grundläggande</td>
              </tr>
            </tbody>
          </table>  
        </div>
      </div>
    </div>
  )
}
