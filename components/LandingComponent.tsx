"use client"
import React, { useEffect } from 'react';
import { Hanko } from "@teamhanko/hanko-elements";
import { useRouter } from 'next/navigation';
import { userEmail } from '@/userEmail';
import { RotatingLines } from 'react-loader-spinner';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

const LandingComponent = () => {
  const router = useRouter();

    useEffect(() => {
      const navigate = () => {
        const email = userEmail()
        router.push(`/native/${email}`)
      }
      navigate()
  }, []);

  return (
    <div>
      <RotatingLines
        strokeColor={"#c7881c"}
        strokeWidth="5"
        animationDuration="0.75"
        width="40"
        visible={true}
      />
    </div>
  );
}

export default LandingComponent;