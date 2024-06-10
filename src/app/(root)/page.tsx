import { UserButton } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div>
      <p>Welcome</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default page
