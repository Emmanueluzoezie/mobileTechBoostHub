"use client";
import React, { useEffect } from 'react'
import { Hanko } from "@teamhanko/hanko-elements";
import { useRouter } from 'next/navigation';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL

const LandingComponent = () => {
    const router = useRouter()
    
    useEffect(() => {
        const getData = async() => {
            const hanko = new Hanko(`${hankoApi}`);
            const {id, email} = await hanko.user.getCurrent();
            router.push(`/native/${email}`)
        }
        getData()
    }, [])
  return (
    <div>LandingComponent</div>
  )
}

export default LandingComponent