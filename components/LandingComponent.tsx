"use client"
import React, { useEffect } from 'react';
import { Hanko } from "@teamhanko/hanko-elements";
import { useRouter } from 'next/navigation';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

// Define the CustomEventConstructor type explicitly
type CustomEventConstructor = {
  new <T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
  prototype: CustomEvent<any>;
};

const LandingComponent = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if code is running in the browser
    if (typeof window !== 'undefined') {
      // Polyfill CustomEvent if not defined
      if (typeof window.CustomEvent !== 'function') {
        window.CustomEvent = function (event: any, params: any) {
          params = params || { bubbles: false, cancelable: false, detail: null };
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        } as any; // Use 'any' for the type assertion

        // Now you can use Hanko or any other client-side code
        const getData = async () => {
          const hanko = new Hanko(`${hankoApi}`);
          const { id, email } = await hanko.user.getCurrent();
          router.push(`/native/${email}`);
        }
        getData();
      }
    }
  }, [router]);

  return (
    <div>LandingComponent</div>
  );
}

export default LandingComponent;