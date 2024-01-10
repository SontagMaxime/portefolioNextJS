import { NextPage } from "next";
// import Image from 'next/image'
import marathon from '../../../public/marathon.png'
import spaceinvader from '../../../public/spaceinvader.png'
import meteo from '../../../public/meteo.jpg'
import pokemon from '../../../public/pokemon.png'

const projetIndex: NextPage = () => {
    return (
        <>
            <main className="bg-gradient-to-r from-cyan-600 to-cyan-900 ">
                <h2 className="font-bold text-5xl text-gray-50 text-center pt-10 pb-20">Projets</h2>

                <div className="grid grid-cols-2 justify-items-center m-10 ">
                    <div className="max-w-sm bg-white">
                        <img
                            alt="Image marathon"
                            // src={marathon}
                            src=""
                            loading="lazy"
                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-800">Level Up</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Level Up est un projet réalisé lors d&apos;un marathon web organisé par l&apos;IUT de Lens. Nous étions une équipe de 9 comportant 5 étudiants MMI et 4 étudiants INFO. Le but du projet était de réaliser un site web en Laravel sur 36h, le sujet était un musée en ligne avec différentes salles que l&apos;on pouvait visiter les unes après les autres. Nous avons décidé de faire le musée sur les jeux vidéo en retraçant les différentes époques du jeu vidéo.
                            </p>
                            <div className="pt-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Laravel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#Team</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#Git</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-sm bg-white ">
                            <img
                                alt="Image spaceinvader"
                                // src={spaceinvader}
                                src=""
                                loading="lazy"
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-800">Space Invaders</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Ce projet consiste à la création du célébre jeu Space Invaders en java. Pour ce faire, nous étions en équipe de 4 pour développer le jeu. Nous avons d&apos;abord commencé par développer la première base du jeu avec les aliens et le joueur, puis nous avons développer de nouvelles fonctionnalité tels que des bonus pour le joueur, des murs de protection ou encore le déplacement en escadrille des aliens.
                                </p>
                                <div className="pt-10">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Java</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#Team</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-items-center mr-10 ml-10 mt-20 pb-10">
                    <div className="max-w-sm bg-white">
                        <img
                            alt="Image meteo"
                            // src={meteo}
                            src=""
                            loading="lazy"
                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-800">Gestion de Pokémon</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Le projet consiste à développer une application de gestion de Pokémon en utilisant le framework Laravel.
                                L&apos;application permettra aux utilisateurs de gérer leur collection de Pokémon en les ajoutant, en les modifiant et en les supprimant à partir de leur collection personnelle. Les utilisateurs pourront également trier et filtrer leurs Pokémon en fonction de différents critères tels que les types ou les faiblesses. Il y aura des pages dédiées pour chaque Pokémon avec des informations détaillées telles que les statistiques et les images.
                            </p>
                            <div className="pt-10">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Laravel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#Solo</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#Git</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-sm bg-white ">
                            <img
                                alt="Image pokemon"
                                // src={pokemon}
                                src=""
                                loading="lazy"
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-800">Application de relevé météo</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Notre projet consiste à développer une application de relevée météo en utilisant le framework Flask et une API météorologique. Cette application a été développée par une équipe de 3 développeurs.
                                    L&apos;application permet aux utilisateurs de consulter les dernières prévisions météorologiques d&apos;un emplacement dans la liste. Les utilisateurs pourront également consulter les données météorologiques historiques pour des dates spécifiques. L&apos;application utilise une API météorologique pour récupérer les données en temps réel et les afficher de manière claire et intuitive avec un graphe d&apos;évolution des températures.
                                </p>
                                <div className="pt-4">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Flask</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#Team</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default projetIndex;