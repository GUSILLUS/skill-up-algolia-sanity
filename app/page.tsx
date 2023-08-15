'use client'

import client from '@/sanity/lib/client';
import { createClient, groq } from 'next-sanity';
import Image from 'next/image'
import { useEffect, useState } from 'react';

async function getData() {
  const res = await client.fetch(`*[_type == "pet"]`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Home() {
  const [pets,setPets] = useState([])

  useEffect(() => {
    async () => {
      const petsFromServer = await client.fetch(groq`*[_type == "pet"]`);

      console.log(petsFromServer);

      setPets(petsFromServer);
    }
  }, [])

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

export async function getProfile() {
  return await client.fetch(groq`*[_type == "pet"]`);
}