import { About } from "@/components/About/About";

export default function Home() {
  return(
    <div className="flex flex-col items-center">
    <div className="flex flex-col justify-center items-center min-h-screen" >
      <About />
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* <Skills /> */}
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* <Projects /> */}
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* <Contact /> */}
    </div>
    </div>
  )
}
