import About from "@/components/about";
import Hero from "../components/hero"
import Manu from "../components/manu"
import Contact from "@/components/contact";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Manu />
    <About />
    <Contact/>
    
   </div>
  );
}