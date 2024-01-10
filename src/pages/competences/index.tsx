import { NextPage } from "next";
import Image from 'next/image'
import java from '../../../public/java.png'
import git from '../../../public/git.png'
import htmlcss from '../../../public/htmlcss.png'
import python from '../../../public/python.png'
import bash from '../../../public/bash.png'
import tailwind from '../../../public/tailwind.png'
import sqlite from '../../../public/sqlite.png'
import sap from '../../../public/SAP.png'

const projetIndex: NextPage = () => {
    return (
        <>
            <main className="bg-gradient-to-r from-cyan-600 to-cyan-900 ">
                <h2 className="font-bold mb-2 text-5xl text-gray-50 text-center p-8">Compétences</h2>
                <div className="flex flex-row justify-center m-6">
                    <div className="basis-1/5  m-4 ">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image java"
                                src={java}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">Java</h2>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 m-4 ">
                        <div className="bg-white rounded-lg shadow-md">
                            <Image
                                alt="Image git"
                                src={git}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">Git</h2>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 m-4">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image htmlcss"
                                src={htmlcss}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">HTML/CSS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 m-4">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image python"
                                src={python}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">Python</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center p-6">
                    <div className="basis-1/5 m-4 ">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image bash"
                                src={bash}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">Bash</h2>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 m-4 ">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image tailwind"
                                src={tailwind}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">Tailwind</h2>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 m-4">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image sqlite"
                                src={sqlite}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">SQLite</h2>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 m-4">
                        <div className="bg-white rounded-lg shadow-md ">
                            <Image
                                alt="Image SAP"
                                src={sap}
                                loading="lazy"
                                quality={60}
                            />
                            <div className="p-2">
                                <h2 className="font-bold mb-2 text-2xl text-gray-900 text-center">SAP</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default projetIndex;