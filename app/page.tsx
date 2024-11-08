import { About } from "@/components/About/About";
import { HomePage } from "@/components/HomePage/HomePage";

export default function Home() {
  return(
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center min-h-screen" >
        <HomePage />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <About />
      </div>
      <div id="skills" className="flex flex-col justify-center items-center min-h-screen">
        {/* <Skills /> */}
      </div>
      <div id="projects" className="flex flex-col justify-center items-center min-h-screen">
        {/* <Projects /> */}
      </div>
      <div id="contact" className="flex flex-col justify-center items-center min-h-screen">
        {/* <Contact /> */}
      </div>
    </div>
  )
}
