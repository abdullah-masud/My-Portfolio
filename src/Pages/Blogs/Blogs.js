import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Blogs = () => {
    return (
        <div className='bg-black  mx-auto h-screen flex justify-center flex-col items-center'>
            <h2 className='text-3xl font-primary text-white'>Blogs</h2>
            <h2 className='text-6xl font-primary text-white'>Coming Soon..</h2>
            <Link to='/'
                className='px-3 py-1 text-white rounded-md mt-5 bg-accent hover:bg-secondary-hover transition-all hover:bg-white hover:text-black hover:font-semibold'
            >
                Home
            </Link>
        </div>
    );
};

export default Blogs;