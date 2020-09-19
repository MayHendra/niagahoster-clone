import React from 'react'
import { Link } from 'react-router-dom'

export default function ModuleSection() {
    const phpModuleOffers = [
        ["IcePhp", "apc", "apcu", "apm", "ares", "bcmath", "bcompiler", "big_int", "bitset", "bloomy", "bz2_filter", "clamav", "coin_acceptor", "crack", "dba"],
        ["http", "huffman", "idn", "apm", "igbinary", "bcmath", "bcompiler", "big_int", "bitset", "bloomy", "bz2_filter", "clamav", "coin_acceptor", "crack", "dba"],
        ["nd_pdo_mysql", "oauth", "oci8", "apm", "igbinary", "bcmath", "bcompiler", "big_int", "bitset", "bloomy", "bz2_filter", "clamav", "coin_acceptor", "crack", "dba"],
        ["stats", "stem", "stomp", "apm", "igbinary", "bcmath", "bcompiler", "big_int", "bitset", "bloomy", "bz2_filter", "clamav", "coin_acceptor", "crack", "dba"],
    ]

    return (
        <section className="container mx-auto mt-8 px-6 mb-10 lg:mb-20">
            <h1 className="text-2xl text-center mb-8 lg:text-3xl">Modul Lengkap untuk Menjalankan Aplikasi PHP Anda.</h1>
            <div className="flex flex-col mb-10 lg:flex-row lg:justify-around">
                <div className="flex justify-around mb-6 lg:mb-0 lg:flex-row lg:w-1/2">
                    <ul>
                        {
                            phpModuleOffers[0].map((module, i) => (
                                <li key={i}>{module}</li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            phpModuleOffers[1].map((module, i) => (
                                <li key={i}>{module}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex justify-around lg:flex-row lg:w-1/2">
                    <ul>
                        {
                            phpModuleOffers[2].map((module, i) => (
                                <li key={i}>{module}</li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            phpModuleOffers[3].map((module, i) => (
                                <li key={i}>{module}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <Link to="" className="px-6 py-2 rounded-full border-2">Selengkapnya</Link>
            </div>
        </section>
    )
}
