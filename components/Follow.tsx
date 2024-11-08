import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Follow = () => {
    return (
        <div className="text-3xl">
            Follow me here

            <div className="flex justify-center gap-6 mt-4">
                <a href="https://www.linkedin.com/in/adityasethi02" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} className="text-blue-700 hover:text-blue-900" />
                </a>
                <a href="https://www.github.com/AdityaSethi02" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} className="text-gray-700 hover:text-gray-900" />
                </a>
            </div>
        </div>
    )
}