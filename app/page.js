import HomeHero from '@/components/HomeHero';
import HowToBuy from '@/components/HowToBuy';
import MeetTheMaker from '@/components/MeetTheMaker';
import CommunityGrid from '@/components/CommunityGrid';
import DarkCTA from '@/components/DarkCTA';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HowToBuy />
      <MeetTheMaker />
      <CommunityGrid />
      <DarkCTA />
    </>
  );
}
