import React from 'react'

import IconZenguard from '../assets/icon/icon PHP Hosting_zendguard.png'
import IconComposer from '../assets/icon/icon PHP Hosting_composer.png'
import IconIonCube from '../assets/icon/icon PHP Hosting_ioncube.png'

export default function ToolsSection() {
    return (
        <section className="container mx-auto my-8 px-6 mb-12 md:mb-20">
            <div className="flex flex-col items-center md:items-end md:flex-row md:justify-around">
                <figure className="flex flex-col items-center">
                    <img src={IconZenguard} alt="Zenguard-Icon" className="w-48 md:w-32 lg:w-56" />
                    <figcaption className="mt-5 md:mt-12">PHP Zend Guard Loader</figcaption>
                </figure>
                <figure className="mt-10 flex flex-col items-center lg:mt-0">
                    <img src={IconComposer} alt="Composer-Icon" className="w-32" />
                    <figcaption className="mt-5">PHP Composer</figcaption>
                </figure>
                <figure className="mt-10 flex flex-col items-center lg:mt-0">
                    <img src={IconIonCube} alt="IonCube-Icon" className="w-48 md:w-32 lg:w-56" />
                    <figcaption className="mt-5 md:mt-12">PHP ionCube Loader</figcaption>
                </figure>
            </div>
        </section>
    )
}
