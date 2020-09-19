import React from 'react'

import IconCode from '../assets/icon/icon PHP Hosting_PHP Semua Versi.svg'
import IconMysql from '../assets/icon/icon PHP Hosting_My SQL.svg'
import IconCpanel from '../assets/icon/icon PHP Hosting_CPanel.svg'
import IconShield from '../assets/icon/icon PHP Hosting_garansi uptime.svg'
import IconInnoDB from '../assets/icon/icon PHP Hosting_InnoDB.svg'
import IconMysqlRemote from '../assets/icon/icon PHP Hosting_My SQL remote.svg'

export default function HostingPackageSection() {
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
        <section className="container mx-auto px-6 mb-16">
            <h1 className="text-2xl text-center md:mb-10 lg:text-3xl">Semua Paket Hosting Sudah Termasuk</h1>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                {
                    hostingPackage.map((h, i) => (
                        <figure className="flex flex-col text-center items-center mb-4" key={i}>
                            <img src={h.icon} alt="icon" className="w-48 md:w-32" />
                            <figcaption className="text-xl font-bold">{h.title}</figcaption>
                            <figcaption className="md:px-20 lg:px-12">{h.desc}</figcaption>
                        </figure>
                    ))
                }
            </div>
        </section>
    )
}
