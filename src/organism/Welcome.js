import React from 'react'

import BannerPHPImage from '../assets/icon/illustration banner PHP hosting-01.svg'

export default function Welcome() {
    const excellences = [
        "Solusi PHP untuk performa query yang lebih cepat.",
        "Konsumsi memori yang lebih rendah.",
        "Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7.",
        "Fitur enkripsi IonCube dari Zend Guard Loaders.",
    ]

    return (
        <main className="container mx-auto mt-8 px-6 mb-12 md:mt-10 lg:mt-15">
            <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
                <div className="flex justify-center lg:w-full">
                    <img className="w-full md:w-5/6 lg:w-3/4" src={BannerPHPImage} alt="phone" />
                </div>
                <div className="mt-8 px-4 md:px-16 lg:px-6">
                    <h2 className="font-black text-3xl tracking-wider lg:text-5xl">PHP Hosting</h2>
                    <p className="leading-relaxed text-2xl lg:text-3xl">Cepat, handal, penuh dengan modul PHP yang Anda butuhkan</p>
                    <table className="mt-1">
                        <tbody>
                            {
                                excellences.map((ex, i) => (
                                    <tr key={i}>
                                        <td>
                                            <svg className="fill-current w-4 -mt-5 mr-1 text-green-600 md:mt-0 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </td>
                                        <td className="py-2">
                                            {ex}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}
