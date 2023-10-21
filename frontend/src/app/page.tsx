import Hero from "@/components/Hero";
import RootLayout from "@/app/layout";
export default function Home() {
  return (
    <>
      <header className=" flex flex-col justify-center items-center h-screen ">
        <Hero />
      </header>
    </>
  );
}

Home.RootLayout = RootLayout;
