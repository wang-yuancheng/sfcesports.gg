import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-gray-10">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
