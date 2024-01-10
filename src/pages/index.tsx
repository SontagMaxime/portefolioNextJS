import Image from 'next/image'
import { Inter } from 'next/font/google'
import maxime from '../../public/maxime.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-cyan-600 to-cyan-900 ">
        <div className="grid grid-cols-2 gap-1 place-items-center ">
          <div className='mt-32'>
            <p className="text-4xl font-medium text-center dark:text-white ">
              SONTAG Maxime
            </p>
            <p className="text-2xl font-medium text-center text-sky-100 pt-6">
              Développeur SAP ABAP/Fiori en alternance chez CGI
            </p>
            <p className="text-2xl font-medium text-center text-sky-100 pt-6">
              |  |
            </p>
            <p className="text-2xl font-medium text-center text-sky-100 pt-6">
              BUT3 à l&apos;IUT de Lens
            </p>
          </div>

          <div className='mt-32'>
            <Image
              alt="Image tete"
              className="rounded-full mr-64"
              height="300"
              src={maxime}
              width="400"
              loading="lazy"
            />
          </div>

        </div>

        <div className="w-full p-4 text-center shadow-md sm:p-8 mt-24 ">
          <h5 className="text-4xl font-bold text-gray-900 dark:text-white">A propos de moi</h5>
          <p className="mb-5 text-xl text-sky-100 text-left sm:text-xl m-8 ml-52 mr-52 ">Je m&apos;appelle Sontag Maxime, j&apos;ai 20 ans. Je suis étudiant en développement informatique et je suis passionné par la création de logiciels et d&apos;applications depuis plusieurs années. J&apos;ai suivi un cursus axé sur les langages de programmation tels que Java, Python et PHP, ainsi que sur les bases de données. J&apos;ai également eu l&apos;occasion de participer à plusieurs projets de développement en équipe, ce qui m&apos;a permis de développer mes compétences en travail d&apos;équipe et en communication.

            En-dehors de mes études, j&apos;aime rester à jour sur les dernières tendances et technologies en développement informatique. J&apos;espère pouvoir utiliser mes compétences et ma passion pour contribuer à des projets innovants et impactants dans le futur.</p>
        </div>
      </main>
    </>
  )
}
