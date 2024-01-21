import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <>
            <header className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="https://www.linkedin.com/in/maxime-sontag" target="_blank" className="flex items-center gap-2" aria-label="Join my Linkedin">
                    <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        // xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                    </svg>
                </Link>
                <Link className="flex items-center gap-2" href="/">
                <span className="text-2xl text-white font-bold uppercase tracking-wide"
                        >SONTAG Maxime</span>
                </Link>
                <nav className="flex gap-4">
                    <Link className="text-xl text-white font-medium hover:underline underline-offset-4" href="/competences">
                    Compétences
                    </Link>
                    <Link className="text-xl text-white font-medium hover:underline underline-offset-4" href="/projets">
                    Projets
                    </Link>
                    <Link className="text-xl text-white font-medium hover:underline underline-offset-4" href="mailto:maximesontag@gmail.com">
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    )
}