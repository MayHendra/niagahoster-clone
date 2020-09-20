import React from 'react'

import ImgSupport from '../assets/image-support.png'
import { Link } from 'react-router-dom'

export default function LinuxHostingSection() {
    return (
        <section className="container mx-auto mt-10 px-6 mb-8 md:px-16 lg:mb-0">
            <div className="md:flex md:flex-col md:justify-center lg:flex-row-reverse">
                <div className="md:mx-auto lg:w-1/2 lg:flex lg:items-end lg:justify-end">
                    <img src={ImgSupport} alt="Support" className="md:mb-5 lg:mb-0" />
                </div>
                <div className="flex flex-col lg:w-1/2 lg:justify-end lg:items-end">
                    <h1 className="text-2xl pb-4 pt-2 text-center md:text-justify lg:text-3xl lg:text-left">Linux Hosting yang Stabil dengan Teknologi LVE</h1>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="pb-6 leading-relaxed tracking-wide text-center md:text-justify">SuperMicro <span className="font-bold">Intel Xeon 24-Cores</span> server dengan Ram <span className="font-bold">128 GB</span> dan teknologi <span className="font-bold">LVE CloudLinux</span> untuk stabilitas server Anda. Dilengkapi dengan <span className="font-bold">SSD</span> untuk kecepatan <span className="font-bold">MySQL</span> dan caching, Apache load balancer berbasis LiteSpeed Technologies, <span className="font-bold">CageFS</span> security, <span className="font-bold">Raid-10</span> protection dan auto backup untuk keamanan website PHP Anda.</p>
                        <Link to="/hosting" className="px-8 py-2 rounded-full bg-blue-500 text-white lg:mt-1">Pilih Hosting Anda</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
