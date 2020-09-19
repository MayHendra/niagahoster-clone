import React from 'react'

import facebookIcon from '../assets/icon/facebook.png'
import twitterIcon from '../assets/icon/twitter.png'
import gplusIcon from '../assets/icon/gplus.png'

export default function Share() {
    return (
        <section className="container mx-auto px-6 py-6 bg-gray-100">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                <div className="lg:w-1/2 lg:ml-10">
                    <p>Bagikan jika Anda menyukai halaman ini.</p>
                </div>
                <ul className="flex mt-3 lg:w-2/5 lg:items-center">
                    <li className="flex items-center mr-2">
                        <img src={facebookIcon} alt="facebook-icon" className="w-5 h-5 mr-px lg:w-6 lg:h-6 lg:mr-1" />
                        <span className="px-4 text-xs text-gray-600 border border-gray-500 rounded-sm lg:px-6 lg:py-1">80k</span>
                    </li>
                    <li className="flex items-center mr-2">
                        <img src={twitterIcon} alt="twitter-icon" className="w-5 h-5 mr-px lg:w-6 lg:h-6 lg:mr-1" />
                        <span className="px-4 text-xs text-gray-600 border border-gray-500 rounded-sm lg:px-6 lg:py-1">450</span>
                    </li>
                    <li className="flex items-center mr-2">
                        <img src={gplusIcon} alt="gplus-icon" className="w-5 h-5 mr-px lg:w-6 lg:h-6 lg:mr-1" />
                        <span className="px-4 text-xs text-gray-600 border border-gray-500 rounded-sm lg:px-6 lg:py-1">1900</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
