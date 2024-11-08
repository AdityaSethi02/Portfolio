import { Typewriter } from "react-simple-typewriter";

export const Intro = () => {

    return (
        <div>
            Hi there, I am
            <span className="text-blue-500">
                <Typewriter
                    words={[
                        " Aditya Sethi",
                        " a Fullstack Developer!",
                        " a Backend Developer!",
                        " a Frontend Developer!",
                        " a Software Engineer!",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={75}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </span>
        </div>
    )
}