import NavbarWCAG from "./components/navbar/navbar-WCAG";
import Navbar from "./components/navbar/Navbar";

export default function Page() {
  return (
    <div className="grid p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
 
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <NavbarWCAG />
        <Navbar />
      
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">        
      </footer>
    </div>
  );
}
