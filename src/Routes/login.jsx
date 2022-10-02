import React from 'react'
import Header from '../components/Home/header'
import { Link } from 'react-router-dom'

export default function login() {
    return (
        <div className='bg-slate-100 min-h-screen w-full'>
            <Header />
            <div className='w-full 2xl:max-w-[1500 px] m-auto'>
                <div className="h-32"></div>
                <h1 className='text-4xl font-extrabold text-center'>Login Below</h1>
                <h3 className='text-center text-lg text-secondary-dark mt-2 mb-3'>New User? <Link to='/signup'><span className='text-purple-600'>Sign Up here</span></Link></h3>
                <div className='p-5 sm:p-10 w-full max-w-[450px] sm:w-[450px] m-auto bg-white border-[1px] border-secondary rounded-lg shadow-sm'>

                    <form method="POST" action="{{ route('login') }}">
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                        </div>
                        <Link className="btn btn-link mb-2 text-purple-600 float-right" to="{{ route('password.request') }}">
                            Forgot Your Password?
                        </Link>
                        <button type="submit" className="text-white bg-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                    </form>
                </div>
            </div >
        </div>
    )
}