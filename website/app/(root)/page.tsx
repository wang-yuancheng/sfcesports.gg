import Hero from "@/components/home/sections/Hero";
import LogoTicker from "@/components/global/LogoTicker";
import PastEvents from "@/components/home/sections/PastEvents";
import Videos from "@/components/home/sections/Videos";
import { logoList } from "@/data/home/logos";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker logoList={logoList} />
      <PastEvents />
      <Videos />
    </>
  );
}
