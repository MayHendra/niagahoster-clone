import React from 'react'

export default function LimitPhpSection() {
    return (
        <section className="container mx-auto mt-8 px-6 mb-10">
            <h1 className="text-2xl mb-8 text-center md:mb-8 lg:text-3xl">Powerful dengan Limit PHP yang Lebih Besar</h1>
            <div className="flex flex-col justify-center md:flex-row md:justify-around">
                <ul className="flex flex-col mb-6 md:mb-0">
                    <li className="flex border-t-2 border-r-2 border-l-2 px-12 py-3 rounded">
                        <div className="mx-1">
                            <svg className="w-5 mt-1 mr-3 text-green-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>
                            max execution time 300s.
                        </p>
                    </li>
                    <li className="flex border-t-2 border-r-2 border-l-2 px-12 py-3 rounded bg-gray-200">
                        <div className="mx-1">
                            <svg className="w-5 mt-1 mr-3 text-green-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>
                            max execution time 300s.
                        </p>
                    </li>
                    <li className="flex border-2 px-12 py-3 rounded">
                        <div className="mx-1">
                            <svg className="w-5 mt-1 mr-3 text-green-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>
                            php memory limit 1024 MB.
                        </p>
                    </li>
                </ul>
                <ul className="flex flex-col">
                    <li className="flex border-t-2 border-r-2 border-l-2 px-12 py-3 rounded">
                        <div className="mx-1">
                            <svg className="w-5 mt-1 mr-3 text-green-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>
                            php max size 128 MB.
                        </p>
                    </li>
                    <li className="flex border-t-2 border-r-2 border-l-2 px-12 py-3 rounded bg-gray-200">
                        <div className="mx-1">
                            <svg className="w-5 mt-1 mr-3 text-green-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>
                            upload max filesize 128 MB.
                        </p>
                    </li>
                    <li className="flex border-2 px-12 py-3 rounded">
                        <div className="mx-1">
                            <svg className="w-5 mt-1 mr-3 text-green-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p>
                            max input vars 2500.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
