import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav className="flex items-center bg-gray-900 p-5 flex-wrap">
                    <Link href="https://www.linkedin.com/in/maxime-sontag" target="_blank" className="p-2 mr-4 inline-flex items-center" aria-label="Join my Linkedin">
                        <svg
                            className="w-6 h-6 text-blue-500 fill-current"
                            // xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            ></path>
                        </svg>
                    </Link>
                    <Link href="/" className="p-2 mr-4 inline-flex items-center">
                        <span className="text-2xl text-white font-bold uppercase tracking-wide"
                        >SONTAG Maxime</span>
                    </Link>
                    <div
                        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                        id="navigation"
                    >
                        <div
                            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto "
                        >
                            <Link
                                href="/"
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-800 mr-4"
                            >
                                <span className="text-xl">Accueil</span>
                            </Link>
                            <Link
                                href="/projets"
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-800 mr-4"
                            >
                                <span className="text-xl">Projets</span>
                            </Link>
                            <Link
                                href="mailto:maximesontag@gmail.com" 
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-800 mr-6"
                            >
                                <span className="text-xl">Contact</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}