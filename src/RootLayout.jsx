import { Outlet } from 'react-router-dom'
import RootNav from './RootNav'

function RootLayout() {
  return (
    <>
      <div className="min-h-full">

        <RootNav></RootNav> 
        <main className="mx-auto max-w-screen-2xl py-6 sm:px-6 lg:px-8">
          {<Outlet />}
        </main>

      </div>
    </>
  )
}

export default RootLayout
