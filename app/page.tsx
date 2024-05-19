import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProject from "@/components/recent-project";
import Approach from "@/components/ui/approach";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
