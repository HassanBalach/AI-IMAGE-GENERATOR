
import { MobilNavbar, Sidebar } from '@/components/Shared'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      
   <Sidebar />
   <MobilNavbar />

    <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    
    </main>
  )
}

export default Layout