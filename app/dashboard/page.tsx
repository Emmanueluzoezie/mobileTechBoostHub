import LandingComponent from '@/components/LandingComponent';
import dynamic from 'next/dynamic';

const HankoProfile = dynamic(() => import('@/components/hanko-components/HankoProfile'), { ssr: false })

const DashboardPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingComponent />
      <HankoProfile />
    </div>
  );
};

export default DashboardPage;
