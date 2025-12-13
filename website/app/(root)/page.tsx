import Hero from "@/sections/Home/Hero";
import LogoTicker from "@/components/global/LogoTicker";
import PastEvents from "@/sections/Home/PastEvents";
import Videos from "@/sections/Home/Videos";
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
