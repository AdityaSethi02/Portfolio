
export const Resume = () => {
    const handleClick = () => {
        window.open("https://docs.google.com/document/d/1Mn0t_oQDgAwXjfIqHsyQ5xoh1m48luTHD12fht91m0A/edit?tab=t.0", "_blank")
    }

    return (
        <div className="flex flex-col">
            <a href="/Aditya Sethi_Resume.pdf" download>
                <button onClick={handleClick} className="bg-blue-500 text-white text-3xl px-6 py-3 rounded-0.5xl shadow-lg hover:bg-blue-600 ">
                    Resume
                </button>
            </a>
        </div>
    );
  };