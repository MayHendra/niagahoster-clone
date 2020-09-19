import React from 'react'

import BannerLaravel from '../assets/icon/illustration banner support laravel hosting.svg'


export default function SupportLaravelSection() {
    return (
        <section className="container mx-auto mt-8 px-6 mb-10 md:px-16 lg:mb-16">
            <h1 className="text-2xl text-center mb-5 lg:mb-3 lg:text-3xl">Mendukung Penuh Framework Laravel</h1>
            <div className="md:flex md:flex-col md:items-center lg:flex-row-reverse lg:justify-center">
                <img src={BannerLaravel} alt="Laravel-svg" className="md:w-3/5" />
                <div>
                    <p className="text-lg py-6 md:pt-6 md:pb-3">Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda.</p>
                    <ul>
                        <li className="flex py-1">
                            <svg className="fill-current w-4 -mt-5 mr-1 text-green-600 md:mt-0 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p>
                                Install Laravel <span className="font-bold">1 klik</span> dengan Softaculous Installer.
                                </p>
                        </li>
                        <li className="flex py-1">
                            <svg className="fill-current w-5 -mt-5 mr-1 text-green-600 md:mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p>
                                Mendukung Ekstensi <span className="font-bold">PHP MCrypt, phar, mbstring, json,</span> dan <span className="font-bold">fileinfo</span>.
                                </p>
                        </li>
                        <li className="flex py-1">
                            <svg className="fill-current w-5 -mt-5 mr-1 text-green-600 md:mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p>
                                Tersedia <span className="font-bold">Composer</span> dan <span className="font-bold">SSH</span> untuk menginstall packages pilihan Anda.
                                </p>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-sm text-center mt-5">Nb: Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</p>
                        <button className="mt-5 bg-blue-500 rounded-full px-8 py-2 font-extrabold text-white">Pilih Hosting Anda</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
