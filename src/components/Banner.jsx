import React from 'react';

export default function Banner() {
  return (
    <section className='w-[100vw] sm:h-[calc(100vh-64px)] aspect-video sm:aspect-auto overflow-hidden bg-banner bg-cover bg-center'>
      <h2 className='w-full h-full text-center content-center text-xl sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl backdrop-blur-sm backdrop-brightness-75 font-Urbanist font-medium md:font-normal lg:font-light tracking-tight text-zinc-100'>
        Drive in an Eco-friendly and Economical way.
      </h2>
    </section>
  );
}
