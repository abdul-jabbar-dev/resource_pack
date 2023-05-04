import { Outlet } from 'react-router-dom'
import RootNav from './RootNav'

function RootLayout() {
  return (
    <>
      <div className="min-h-full">

        <RootNav></RootNav>

        <header className="mx-auto max-w-screen-2xl py-6 sm:px-6 lg:px-8">
          <div className='w-full'>

            <h1>A free repository for community
              components using Tailwind CSS</h1>

            <p>Open source Tailwind UI components and templates to
              bootstrap your new apps, projects or landing sites!</p>

            <div>

            </div>

          </div>
        </header>

        <main className="mx-auto max-w-screen-2xl py-6 sm:px-6 lg:px-8">
          {<Outlet />}
        </main>

      </div>
    </>
  )
}

export default RootLayout
