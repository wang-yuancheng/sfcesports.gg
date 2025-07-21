import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { LongLiveDisplay } from "@/components/navbar/LiveDisplay";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <LongLiveDisplay />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
