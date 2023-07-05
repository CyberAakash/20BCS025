import React from 'react'
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <>
    <div className="flex items-center justify-center flex-col gap-6">
        <h1 className="text-3xl">Train Problem</h1>
        <Link to="/trains" className="p-2 bg-blue-400 text-white cursor-pointer rounded-md">Train Details</Link>
    </div>
    </>
  )
}

export default HomePage