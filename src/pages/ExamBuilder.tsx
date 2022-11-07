import React from 'react'

export default function ExamBuilder() {
  return (
    <div className=''>
      {/* Drawer */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-row justify-between">
          <label htmlFor="my-drawer" className="btn btn-accent drawer-button">Open drawer</label>

          {/* Center content */}
          <div className='flex flex-col p-4 gap-3 items-center'>
            <h1>Examenbyggare</h1>
            <div className='flex flex-row justify-center items-center gap-3'>
              <h1 className='text-2xl'>År 1</h1>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm'>Termin 1</h2>
                <div className="card card-compact w-56 shadow-xl bg-accent">
                  <div className="card-body">
                    <div className="card-actions justify-end">
                      <button className="btn btn-square btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <p className='text-sm text-black'>We are using cookies for no reason.</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm'>Termin 2</h2>
                <div className="card card-compact w-56 shadow-xl bg-accent">
                  <div className="card-body">
                    <div className="card-actions justify-end">
                      <button className="btn btn-square btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <p className='text-sm text-black'>We are using cookies for no reason.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className='flex flex-col gap-6 p-4'>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Upload file</span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control">
              <h2>Använd preset</h2>
              <div className="input-group">
                <select className="select select-accent select-bordered">
                  <option disabled selected>Välj preset</option>
                  <option>Civilingenjör 5 år</option>
                  <option>3 år</option>
                </select>
                <button className="btn">Använd</button>
              </div>
            </div>

            <div className="collapse collapse-arrow rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-accent text-primary-content">
                Visa obligatoriska kurser
              </div>
              <div className="collapse-content bg-accent text-primary-content">
                <p>hello</p>
              </div>
            </div>

            <div className='flex flex-col'>
              <h3>Kurser valda</h3>
              <progress className="progress progress-accent w-56" value="40" max="100"></progress>
              <h4 className='self-center'>33%</h4>
            </div>

            <div className="btn-group">
              <button className="btn btn-accent">Spara som</button>
              <button className="btn">Skriv ut</button>
            </div>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
