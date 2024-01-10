import Link from "next/link"

export const Footer: React.FC = () => {
    return (
        <>
            <footer className="w-full text-center bg-white shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="mt-4">
                    <Link href="/"><span className="mb-5 text-xl text-gray-500 hover:bg-gray-700 sm:text-xl dark:text-gray-400 p-4">Accueil</span></Link>
                    <Link href="CV_Sontag_maxime.pdf" target="_blank"><span className="mb-5 text-xl text-gray-500 hover:bg-gray-700 sm:text-xl dark:text-gray-400 p-4">CV</span></Link>
                    <Link href="mailto:maximesontag@gmail.com"><span className="mb-5 text-xl text-gray-500 hover:bg-gray-700 sm:text-xl dark:text-gray-400 p-4">Contact</span></Link>
                    <p className="mb-5 text-base text-gray-400 sm:text-lg dark:text-gray-400 pt-6">© 2023 Sontag Maxime</p>
                </div>
            </footer>
        </>
    )
}