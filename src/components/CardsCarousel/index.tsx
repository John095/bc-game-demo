import React from 'react'
import Carousel from "./Carousel";
export default function CardsCarousel() {
  return (
    <>
        <div className="w-full flex items-center justify-start mt-5 mb-4 ml-5">
                    <div className="relative w-3 h-3 mr-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75"></span>
                        <span className="absolute inline-flex h-3 w-3 rounded-full bg-brand-700"></span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90 mr-8">
                        Recent Big Wins
                    </h3>
                    <ul className='flex justify-start items-center gap-4 tex-lg font-semibold text-gray-400'>
                        <li className='border-b-brand-700 border-b-2 p-2'>All</li>
                        <li>BC Originals</li>
                        <li>Slots</li>
                        <li>Live Casino</li>
                    </ul>
        </div>
        <div className="rounded-2xl flex justify-center items-center border border-gray-200 bg-white px-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-4 overflow-hidden">
            <div className="flex flex-col gap-2 m-2 py-2 flex-1 justify-center items-center max-w-full">
                <div className='w-full'>
                    <Carousel />
                </div>
            </div>
        </div>
    </>

  )
}
