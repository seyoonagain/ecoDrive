import React from 'react';

export default function Header() {
  return (
    <header className='p-4 mb-10 flex justify-between items-center'>
      <h1 className='text-4xl tracking-tighter font-Poppins'>
        <span className='text-green-400 font-bold'>eco</span>
        <span className='bg-blue-600 inline-block h-9 font-black italic'>
          Drive
        </span>
      </h1>
      <nav>
        <ul className='list-none flex gap-10'>
          <li>Browse Vehicles</li>
          <li>Driving Tips</li>
          <li>Efficiency Calculator</li>
        </ul>
      </nav>
      <section>
        <button className='mr-3'>My Page</button>
        <button>Login</button>
      </section>
    </header>
  );
}
