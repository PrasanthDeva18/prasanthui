import React from 'react'
import Header from '../components/Home/header'
import { Link } from 'react-router-dom'

export default function login() {
    return (
        <div className='bg-slate-100 min-h-screen w-full'>
            <Header />
            <div className='w-full 2xl:max-w-[1550px] m-auto'>
                <div className="h-32"></div>
                <h1 className='text-4xl font-extrabold text-center'>Signup Below</h1>
                <h3 className='text-center text-lg text-secondary-dark mt-2 mb-3'>Already an User? <Link to='/login'><span className='text-purple-600'>Login here</span></Link></h3>
                <div className='p-5 sm:p-10 w-full max-w-[450px] sm:w-[450px] m-auto bg-white border-[1px] border-secondary rounded-lg shadow-sm'>

                <form method="POST" action="{{ route('register') }}">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <input type="hidden" name="admin" id="admin" value="user" />
                <button type="submit" className="text-white bg-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            </form>
                </div>
            </div >
        </div>
    )
}