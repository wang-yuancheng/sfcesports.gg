import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { LongLiveDisplay } from "@/components/navigation/LiveDisplay";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <div className="sm:hidden">
        <LongLiveDisplay />
      </div>
      <main>{children}</main>
      <div className="mx-4 xs:mx-8">
        <Footer />
      </div>
    </div>
  );
}
