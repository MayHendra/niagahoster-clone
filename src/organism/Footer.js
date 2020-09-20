import React from 'react'

import facebookIcon from '../assets/icon/facebook-circled.svg'
import twitterIcon from '../assets/icon/twitter-circled.svg'
import gplusIcon from '../assets/icon/google-plus-circled.svg'

export default function Footer() {
    const footerList = [
        {
            "contact": [
                ["0274-53055XX", "Senin - Minggu", "24 Jan Nonstop"],
                ["Jl. Selokan Mataram Monjali", "Karangjati MT I/34", "Sinduandi, Mlati, Sleman", "Yogyakarta 55284"]
            ],
            "services": ["Domain", "Shared Hosting", "Cloud VPS Hosting", "Managed VPS Hosting", "Web Builder", "Keamanan SSL/HTTPS", "Jasa Pembuatan Website", "Program Affiliasi"],
            "hosting": ["Hosting Murah", "Hosting Indonesia", "Hosting Singapura SG", "Hosting PHP", "Hosting Wordpress", "Hosting Laravel"],
            "tutorial": ["Knowledgebase", "Blog", "Cara Pembayaran"],
            "about": ["Tim Niagahoster", "Karir", "Events", "Penawaran & Promo Spesial", "Kontak Kami"],
            "why": ["Support Terbaik", "Garansi Harga Termurah", "Domain Gratis Selamanya", "Datacenter Hosting Terbaik", "Review Pelanggan"]
        }
    ]

    return (
        <footer className="mx-auto px-6 py-8 bg-black text-gray-300">
            <div className="flex flex-col mt-6">
                <div className="md:flex lg:justify-between">
                    <div className="flex mb-8 lg:w-1/2 lg:justify-around">
                        <ul className="pr-10 lg:ml-2">
                            <li className="uppercase tracking-wide font-bold mb-2">hubungi kami</li>
                            <div className="mb-2">
                                {
                                    footerList[0].contact[0].map((c, i) => (
                                        <li className="text-sm tracking-wide leading-relaxed" key={i}>{c}</li>
                                    ))
                                }
                            </div>
                            {
                                footerList[0].contact[1].map((c, i) => (
                                    <li className="text-sm tracking-wide leading-relaxed" key={i}>{c}</li>
                                ))
                            }
                        </ul>
                        <ul className="pr-10 lg:w-1/2">
                            <li className="uppercase tracking-wide font-bold mb-2">layanan</li>
                            {
                                footerList[0].services.map((s, i) => (
                                    <li className="text-sm tracking-wide leading-relaxed" key={i}>{s}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex mb-8 lg:w-1/2 lg:justify-around">
                        <ul className="pr-10">
                            <li className="uppercase tracking-wide font-bold mb-3">services hosting</li>
                            {
                                footerList[0].hosting.map((h, i) => (
                                    <li className="text-sm tracking-wide leading-relaxed" key={i}>{h}</li>
                                ))
                            }
                        </ul>
                        <ul className="pr-10">
                            <li className="uppercase tracking-wide font-bold mb-3">tutorial</li>
                            {
                                footerList[0].tutorial.map((t, i) => (
                                    <li className="text-sm tracking-wide leading-relaxed" key={i}>{t}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="md:flex lg:justify-between">
                    <div className="flex mb-8 lg:w-1/2 lg:justify-around">
                        <ul className="pr-10 lg:pr-0">
                            <li className="uppercase tracking-wide font-bold mb-3">tentang kami</li>
                            {
                                footerList[0].about.map((a, i) => (
                                    <li className="text-sm tracking-wide leading-relaxed" key={i}>{a}</li>
                                ))
                            }
                        </ul>
                        <ul className="pr-10 lg:pr-0 lg:w-1/2 lg:ml-2">
                            <li className="uppercase tracking-wide font-bold mb-3">kenapa pilih niagahoster?</li>
                            {
                                footerList[0].why.map((w, i) => (
                                    <li className="text-sm tracking-wide leading-relaxed" key={i}>{w}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="mb-8 lg:w-1/2 lg:flex lg:items-start">
                        <div className="lg:mr-6">
                            <p className="uppercase tracking-wide font-bold mb-3">News Letter</p>
                            <div className="relative w-64">
                                <input type="text" className="rounded-full w-64 pl-5 pr-36 py-3 text-gray-900 focus:outline-none" placeholder="Email" />
                                <button className="rounded-full bg-blue-500 px-3 py-2 absolute right-0 mt-1 mr-1">Berlangganan</button>
                                <p className="text-sm mt-2">Dapatkan promo dan konten menarik dari penyedia terbaik Anda.</p>
                            </div>
                        </div>
                        <div className="flex mt-4 lg:mt-8">
                            <img src={facebookIcon} alt="facebook" className="mr-5" />
                            <img src={twitterIcon} alt="twitter" className="mr-5" />
                            <img src={gplusIcon} alt="gplus" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col text-xs lg:flex-row lg:justify-between lg:px-8">
                <ul className="mb-4">
                    <li className="mb-2">Copyright @2016 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta</li>
                    <li>Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</li>
                </ul>
                <ul>
                    <li>Syarat dan Ketentuan | Kebijakan Privasi</li>
                </ul>
            </div>
        </footer>
    )
}
