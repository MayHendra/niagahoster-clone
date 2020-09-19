import React from 'react'

export default function Contact() {
    return (
        <section className="mx-auto py-8 bg-blue-500">
            <div className="flex flex-col items-center lg:flex-row lg:justify-around">
                <h1 className="text-white text-center lg:text-2xl">Perlu <span className="uppercase font-bold">bantuan?</span> Hubungi kami : <span className="uppercase font-bold">0274-53055XX</span></h1>
                <button className="border-2 border-white rounded-full px-10 py-2 mt-4 flex items-center lg:mt-0">
                    <svg className="fill-current text-white w-3 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    <span className="text-white font-medium">Live Chat</span>
                </button>
            </div>
        </section>
    )
}
