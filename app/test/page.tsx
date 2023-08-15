import client from '@/sanity/lib/client';
import { createClient, groq } from 'next-sanity';
import Image from 'next/image'
import { useEffect, useState } from 'react';

async function getData() {
  const res = await client.fetch(`*[_type == "pet"]`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  return res;
}

export default async function Home() {
  const pets = await getData()

  console.log(pets)
    
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>pets</h2>
        {pets && <p>asdasd</p>}
      </main>
    </>
  );
}