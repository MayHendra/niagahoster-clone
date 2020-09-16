import React from 'react'

import Navbar from '../organism/Navbar'

import BannerPHPImage from '../assets/icon/illustration banner PHP hosting-01.svg'
import IconZenguard from '../assets/icon/icon PHP Hosting_zendguard.png'
import IconComposer from '../assets/icon/icon PHP Hosting_composer.png'
import IconIonCube from '../assets/icon/icon PHP Hosting_ioncube.png'
import IconCode from '../assets/icon/icon PHP Hosting_PHP Semua Versi.svg'
import IconMysql from '../assets/icon/icon PHP Hosting_My SQL.svg'
import IconCpanel from '../assets/icon/icon PHP Hosting_CPanel.svg'
import IconShield from '../assets/icon/icon PHP Hosting_garansi uptime.svg'
import IconInnoDB from '../assets/icon/icon PHP Hosting_InnoDB.svg'
import IconMysqlRemote from '../assets/icon/icon PHP Hosting_My SQL remote.svg'

export default function Home() {
    const excellences = [
        "Solusi PHP untuk performa query yang lebih cepat.",
        "Konsumsi memori yang lebih rendah.",
        "Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7.",
        "Fitur enkripsi IonCube dari Zend Guard Loaders.",
    ]

    const hostingPackage = [
        {
            "icon": IconCode,
            "title": "PHP Semua Versi",
            "desc": "Pilih mulai dari versi PHP 5.3 s/d PHP 7 Ubah sesuka Anda!."
        },
        {
            "icon": IconMysql,
            "title": "MySQL Versi 5.6",
            "desc": "Nikmati MySQL versi terbaru. tercepat dan kaya akan fitur."
        },
        {
            "icon": IconCpanel,
            "title": "Panel Hosting cPanel",
            "desc": "Kelola website dengan panel canggil yang familiar di hati Anda."
        },
        {
            "icon": IconShield,
            "title": "Garansi Uptime 99.9%",
            "desc": "Data center yang mendukung kelangsungan website Anda 24/7."
        },
        {
            "icon": IconInnoDB,
            "title": "Database InnoDB Unlimited",
            "desc": "Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda."
        },
        {
            "icon": IconMysqlRemote,
            "title": "Wildcard Remote MySQL",
            "desc": "Mendukung s/d 25 max_user_connections dan 100 max_connections."
        },
    ]

    return (
        <div>
            <Navbar searchVisible={false} />
            <main className="container mx-auto mt-8 px-6 mb-10 md:mt-10 lg:mt-15">
                <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center">
                    <div className="flex flex-col lg:w-2/5">
                        <div className="flex justify-center">
                            <img className="w-full" src={BannerPHPImage} alt="phone" />
                        </div>
                        <div className="mt-8 px-4 md:px-16 lg:px-0 lg:mt-0">
                            <h2 className="font-black text-3xl tracking-widest">PHP Hosting</h2>
                            <p className="leading-relaxed text-2xl">Cepat, handal, penuh dengan modul PHP yang Anda butuhkan</p>
                            <table className="mt-1">
                                <tbody>
                                    {
                                        excellences.map((ex, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <svg className="fill-current w-4 -mt-5 mr-1 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                </div>
            </main>
            <section className="container mx-auto mt-6 px-6">
                <div className="flex flex-col items-center">
                    <figure className="flex flex-col items-center">
                        <img src={IconZenguard} alt="Zenguard-Icon" className="w-48" />
                        <figcaption className="mt-3">PHP Zend Loader</figcaption>
                    </figure>
                    <figure className="mt-10 flex flex-col items-center">
                        <img src={IconComposer} alt="Composer-Icon" className="w-48" />
                        <figcaption className="mt-3">PHP Composer</figcaption>
                    </figure>
                    <figure className="mt-10 flex flex-col items-center">
                        <img src={IconIonCube} alt="IonCube-Icon" className="w-48" />
                        <figcaption className="mt-3">PHP ionCube Loader</figcaption>
                    </figure>
                </div>
            </section>
            <section className="container mx-auto mt-8 px-6 mb-10">
                <div>
                    <h2 className="font-black text-2xl tracking-wide text-center">Paket Hosting Singapura yang Tepat</h2>
                    <p className="text-center">Diskon 40% + Domain dan SSL Gratis untuk Anda</p>
                </div>
                <div className="mt-8">
                    <div className="border-2 rounded text-center pb-10">
                        <h3 className="border-b-2 font-black text-xl tracking-wide py-2">Bayi</h3>
                        <div className="border-b-2 font-normal mt-4">
                            <p className="line-through">Rp 19.900</p>
                            <p>Rp. <span className="text-4xl font-extrabold text-gray-800">14</span><span className="font-extrabold text-gray-800">.900</span>/ bln</p>
                        </div>
                        <div className="border-b-2 py-2 mb-6">
                            <p><span className="font-bold">938</span> pengguna terdaftar</p>
                        </div>
                        <div>
                            <p className="py-1 font-bold">0.5X RESOURCE POWER</p>
                            <p className="py-1"><span className="font-bold">500</span> MB Disk Space</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Bandwith</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Databases</p>
                            <p className="py-1"><span className="font-bold">1</span> Domain</p>
                            <p className="py-1"><span className="font-bold">Instant</span> Backup</p>
                            <p className="py-1"><span className="font-bold">Unlimited SSL</span> Gratis Selamanya</p>
                        </div>
                        <button className="mt-10 border-gray-800 border-2 rounded-full px-8 py-2 font-extrabold">Pilih Sekarang</button>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="border-2 rounded text-center pb-10">
                        <h3 className="border-b-2 font-black text-xl tracking-wide py-2">Pelajar</h3>
                        <div className="border-b-2 font-normal mt-4">
                            <p className="line-through">Rp 46.900</p>
                            <p>Rp. <span className="text-4xl font-extrabold text-gray-800">23</span><span className="font-extrabold text-gray-800">.900</span>/ bln</p>
                        </div>
                        <div className="border-b-2 py-2 mb-6">
                            <p><span className="font-bold">4.168</span> pengguna terdaftar</p>
                        </div>
                        <div>
                            <p className="py-1 font-bold">1X RESOURCE POWER</p>
                            <p className="py-1"><span className="font-bold">500</span> MB Disk Space</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Bandwith</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> POP3 Email</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Databases</p>
                            <p className="py-1"><span className="font-bold">10</span> Addon Domains</p>
                            <p className="py-1"><span className="font-bold">Instant</span> Backup</p>
                            <p className="py-1"><span className="font-bold">Domain Gratis</span> Selamanya</p>
                            <p className="py-1"><span className="font-bold">Unlimited SSL</span> Gratis Selamanya</p>
                        </div>
                        <button className="mt-10 border-gray-800 border-2 rounded-full px-8 py-2 font-extrabold">Pilih Sekarang</button>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="border-2 border-blue-500 rounded text-center pb-10">
                        <h3 className="font-black text-xl tracking-wide py-2 text-white bg-blue-500">Personal</h3>
                        <div className="font-normal pt-4 bg-blue-500 text-white">
                            <p className="line-through">Rp 58.900</p>
                            <p>Rp. <span className="text-4xl font-extrabold">38</span><span className="font-extrabold">.900</span>/ bln</p>
                        </div>
                        <div className="bg-blue-600 py-2 mb-6 text-white">
                            <p><span className="font-bold">10.017</span> pengguna terdaftar</p>
                        </div>
                        <div>
                            <p className="py-1 font-bold">2X RESOURCE POWER</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Disk Space</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Bandwith</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> POP3 Email</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Databases</p>
                            <p className="py-1"><span className="font-bold">10</span> Addon Domains</p>
                            <p className="py-1"><span className="font-bold">Instant</span> Backup</p>
                            <p className="py-1"><span className="font-bold">Domain Gratis</span> Selamanya</p>
                            <p className="py-1"><span className="font-bold">Unlimited SSL</span> Gratis Selamanya</p>
                            <p className="py-1"><span className="font-bold">Private</span> Name Server</p>
                            <p className="py-1"><span className="font-bold">SpanAssasin</span> Mail Protection</p>
                        </div>
                        <button className="mt-10 bg-blue-500 rounded-full px-8 py-2 font-extrabold text-white">Pilih Sekarang</button>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="border-2 rounded text-center pb-10">
                        <h3 className="border-b-2 font-black text-xl tracking-wide py-2">Bisnis</h3>
                        <div className="border-b-2 font-normal mt-4">
                            <p className="line-through">Rp 109.900</p>
                            <p>Rp. <span className="text-4xl font-extrabold text-gray-800">65</span><span className="font-extrabold text-gray-800">.900</span>/ bln</p>
                        </div>
                        <div className="border-b-2 py-2 mb-6">
                            <p><span className="font-bold">3.552</span> pengguna terdaftar</p>
                        </div>
                        <div>
                            <p className="py-1 font-bold">3X RESOURCE POWER</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Disk Space</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Bandwith</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> POP3 Email</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Databases</p>
                            <p className="py-1"><span className="font-bold">Unlimited</span> Addon Domains</p>
                            <p className="py-1"><span className="font-bold">Magic Auto</span> Backup & Restore</p>
                            <p className="py-1"><span className="font-bold">Domain Gratis</span> Selamanya</p>
                            <p className="py-1"><span className="font-bold">Unlimited SSL</span> Gratis Selamanya</p>
                            <p className="py-1"><span className="font-bold">Private</span> Name Server</p>
                            <p className="py-1"><span className="font-bold">Prioritas</span> Layanan Support</p>
                            <div className="flex justify-center py-3">
                                <svg className="fill-current w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="fill-current w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="fill-current w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="fill-current w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="fill-current w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p className="py-1"><span className="font-bold">SpamExpert</span> Pro Mail Protector</p>
                        </div>
                        <button className="mt-10 border-gray-800 border-2 rounded-full px-8 py-2 font-extrabold">Diskon 40%</button>
                    </div>
                </div>
            </section>
            <section className="container mx-auto mt-8 px-6 mb-10">
                <h1 className="text-2xl mb-5 text-center">Powerful dengan Limit PHP yang Lebih Besar</h1>
                <div className="flex flex-col justify-center">
                    <table class="table-auto mb-5">
                        <tbody>
                            <tr>
                                <td className="border rounded-sm px-4 py-2 flex items-center">
                                    <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>max execution time 300s</span>
                                </td>
                                <td className="border rounded-sm px-4 py-2 flex items-center">
                                    <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>max execution time 300s</span>
                                </td>
                                <td className="border rounded-sm px-4 py-2 flex items-center">
                                    <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>php memory limit 1024 MB</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table-auto mb-5">
                        <tbody>
                            <tr>
                                <td className="border rounded-sm px-4 py-2 flex items-center">
                                    <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>post max size 128 MB</span>
                                </td>
                                <td className="border rounded-sm px-4 py-2 flex items-center">
                                    <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>upload maz filesize 128 MB</span>
                                </td>
                                <td className="border rounded-sm px-4 py-2 flex items-center">
                                    <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>max input vars 500</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="container mx-auto mt-8 px-6 mb-10">
                <h1 className="text-2xl text-center">Semua Paket Hosting Sudah Termasuk</h1>
                <div>
                    {
                        hostingPackage.map((h, i) => (
                            <figure className="flex flex-col text-center items-center mb-4" key={i}>
                                <img src={h.icon} alt="icon" className="w-48" />
                                <figcaption className="text-xl font-bold">{h.title}</figcaption>
                                <figcaption className="">{h.desc}</figcaption>
                            </figure>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
