import React from 'react'

export default function LimitPhpSection() {
    return (
        <section className="container mx-auto mt-8 px-6 mb-10">
            <h1 className="text-2xl mb-8 text-center md:mb-8 lg:text-3xl">Powerful dengan Limit PHP yang Lebih Besar</h1>
            <div className="flex flex-col justify-center md:flex-row md:justify-around">
                <table className="table-auto mb-5">
                    <tbody>
                        <tr>
                            <td className="border rounded-sm px-4 py-2 flex items-center">
                                <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>max execution time 300s</span>
                            </td>
                            <td className="border rounded-sm px-4 py-2 flex items-center">
                                <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>max execution time 300s</span>
                            </td>
                            <td className="border rounded-sm px-4 py-2 flex items-center">
                                <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>php memory limit 1024 MB</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-auto mb-5">
                    <tbody>
                        <tr>
                            <td className="border rounded-sm px-4 py-2 flex items-center">
                                <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>post max size 128 MB</span>
                            </td>
                            <td className="border rounded-sm px-4 py-2 flex items-center">
                                <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>upload maz filesize 128 MB</span>
                            </td>
                            <td className="border rounded-sm px-4 py-2 flex items-center">
                                <svg className="fill-current w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>max input vars 500</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
