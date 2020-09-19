import React, { Fragment } from 'react'

import Navbar from '../organism/Navbar'
import Welcome from '../organism/Welcome'
import ToolsSection from '../organism/ToolsSection'
import HostingSingapuraSection from '../organism/HostingSingapuraSection'
import LimitPhpSection from '../organism/LimitPhpSection'
import HostingPackageSection from '../organism/HostingPackageSection'
import SupportLaravelSection from '../organism/SupportLaravelSection'
import ModuleSection from '../organism/ModuleSection'
import LinuxHostingSection from '../organism/LinuxHostingSection'
import Share from '../organism/Share'
import Contact from '../organism/Contact'
import Footer from '../organism/Footer'


export default function Home() {
    return (
        <Fragment>
            <Navbar searchVisible={false} />
            <Welcome />
            <ToolsSection />
            <HostingSingapuraSection />
            <LimitPhpSection />
            <HostingPackageSection />
            <SupportLaravelSection />
            <ModuleSection />
            <LinuxHostingSection />
            <Share />
            <Contact />
            <Footer />
        </Fragment>
    )
}
