import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RootLayout from "@/app/layout";
export default function Home() {
  return (
    <>
      <header className=" flex justify-center items-center h-screen ">
        <Hero />
      </header>
    </>
  );
}

Home.RootLayout = RootLayout;
