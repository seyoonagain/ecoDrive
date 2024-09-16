import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

export default function Header() {
  return (
    <header className='bg-zinc-950 fixed w-full h-16 z-50 p-4 text-center'>
      <BiMenu className='size-6 md:hidden absolute top-6 left-7 cursor-pointer' />
      <nav className='md:flex md:gap-8 lg:gap-12 text-sm hidden absolute left-7 top-6'>
        <Link to='/search' className='menu'>
          Browse
        </Link>
        <Link to='/tips' className='menu'>
          Tips
        </Link>
        <Link to='/calculator' className='menu'>
          Calculator
        </Link>
      </nav>
      <Link
        to='/'
        className='text-3xl tracking-tighter font-Bruno cursor-pointer'
      >
        <span>eco</span>
        <span className='font-bold italic'>Drive</span>
      </Link>
      <section className='absolute right-7 top-6 flex gap-8 lg:gap-12'>
        <Link to='/mypage' className='md:block hidden menu'>
          My Page
        </Link>
        <p className='menu'>Login</p>
      </section>
    </header>
  );
}
