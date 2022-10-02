import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function header() {
  return (
    <nav className="bg-white shadow transition-all fixed z-30 w-full 2xl:max-w-[1600px]">
  <div className='w-full max-h-18 px-5 lg:px-20 md:px-10 py-5 flex justify-between'>
    <Link to="/">
      <div className='flex'>
        <img src="/assets/logo.svg" alt="Logo"
        className="h-9 w-9 mr-1"/>
        <h3 className='text-xl font-medium mt-1 font-inter'>Artizence Hirecoop</h3>
    </div>
    </Link>
    <div className="md:hidden h-8">
      {/* <button className="text-secondary-black focus:outline-none" id="sidemenubtn" onClick={"toggleSideMenu()"}> */}
      <button className="text-secondary-black focus:outline-none" id="sidemenubtn">
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
          </path>
        </svg>
      </button>
    </div>
    <div className='hidden md:flex space-x-2'>
      <Link to='/dashboard'><button
          className="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">Product</button></Link>
      <Link to='/pricing'><button
          className="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">Pricing</button></Link>
      <Link to='/'><button
          className="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">More</button></Link>
      <div className='h-5 w-[1px] mt-2 bg-gray-300'></div>
      <CustomLink to='/login'><button
          className="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">Login</button></CustomLink>
      <CustomLink to='/signup'><button className="py-1 px-5 bg-primary hover:bg-blue-700 text-white text-base rounded-lg">Sign
          Up</button></CustomLink>
    </div>
    <div id="sideMenus" className='block md:hidden h-screen fixed w-60 bg-gray-200 top-0 right-0 z-30'>
      {/* <button className="text-secondary-black focus:outline-none mb-6 mt-3" onclick="toggleSideMenu()"> */}
      <button className="text-secondary-black focus:outline-none mb-6 mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="h-10 w-10" fill="currentColor">
          <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
        </svg>
      </button>
      <Link to='/'><button
          className="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Home</button></Link>
      <Link to='/'><button
          className="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Product</button></Link>
      <Link to='/'><button
          className="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Pricing</button></Link>
      <Link to='/'><button
          className="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">More</button></Link>
      <div className='h-[2px] w-full bg-gray-300 my-4'></div>
      <Link to='/'><button
          className="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Login</button></Link>
      <Link to='/'><button
          className="py-2 px-5 font-bold bg-primary hover:bg-blue-700 hover:text-white text-white text-base text-left w-full">Sign
          Up</button></Link>
    </div>
  </div>

</nav>
  )
}


// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <CustomLink to="/pricing">Pricing</CustomLink>
//         <CustomLink to="/about">About</CustomLink>
//       </ul>
//     </nav>
//   )
// }

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""} style={{listStyle:'none'}}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}