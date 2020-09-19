import React, { useState } from 'react'

import NiagaHosterLogo from '../assets/niagahoster-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [active, setActive] = useState(false)

    const onClickToogleActive = () => {
        setActive(!active)
    }
    return (
        <nav className="shadow-sm py-4">
            <div className="container mx-auto px-6 lg:px-10 lg:flex lg:justify-between">
                <div className="flex justify-between">
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <img className="w-40 md:w-56 lg:w-64" src={NiagaHosterLogo} alt="niagahoster-logo" />
                        </Link>
                    </div>
                    <button className="focus:outline-none lg:hidden" onClick={onClickToogleActive}>
                        <svg className="w-6 md:w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:justify-between lg:items-center">
                    <div className="flex mr-3 lg:mr-0">
                        <Link to="/hosting" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Hosting</Link>
                        <Link to="/domain" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Domain</Link>
                        <Link to="/server" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Server</Link>
                        <Link to="/website" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Website</Link>
                        <Link to="/afiliasi" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Afiliasi</Link>
                        <Link to="/promo" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Promo</Link>
                        <Link to="/pembayaran" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Pembayaran</Link>
                        <Link to="/review" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Review</Link>
                        <Link to="/kontak" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Kontak</Link>
                        <Link to="/blog" className="px-3 py-2 tracking-wide text-gray-700 font-normal">Blog</Link>
                    </div>
                </div>
                {
                    active === true ?
                        <div className="flex flex-col mt-5 md:items-end md:flex-row-reverse md:mt-3 md:mr-2 lg:hidden">
                            <div className="flex flex-col">
                                <Link to="/hosting" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Hosting</Link>
                                <Link to="/domain" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Domain</Link>
                                <Link to="/server" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Server</Link>
                                <Link to="/website" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Website</Link>
                                <Link to="/afiliasi" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Afiliasi</Link>
                            </div>
                            <div className="flex flex-col md:mr-20">
                                <Link to="/promo" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Promo</Link>
                                <Link to="/pembayaran" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Pembayaran</Link>
                                <Link to="/review" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Review</Link>
                                <Link to="/kontak" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Kontak</Link>
                                <Link to="/blog" className="py-2 md:px-6 tracking-wide text-gray-700 font-normal md:text-lg">Blog</Link>
                            </div>
                        </div>
                        : ''
                }
            </div>
        </nav>
    )
}
