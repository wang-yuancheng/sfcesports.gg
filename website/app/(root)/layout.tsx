import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { LongLiveDisplay } from "@/components/navbar/LiveDisplay";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-gray-10">
        <Header />
        <div className="sm:hidden"><LongLiveDisplay /></div>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
