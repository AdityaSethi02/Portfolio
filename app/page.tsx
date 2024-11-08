import { About } from "@/components/About";
import { HomePage } from "@/components/HomePage/HomePage";

export default function Home() {
  return(
    <div className="flex flex-col items-center">
    <div className="flex flex-col justify-center items-center min-h-screen" >
      <HomePage />
    </div>
    <div className="w-full">
      <About />
      </div>
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  )
}
