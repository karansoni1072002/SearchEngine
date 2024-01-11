import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
const SearchBar = ({ searchData, input, setInput }) => {
    const [inputFocused, setInputFocused] = useState(false)


    
    return (
        <div className="flex flex-col pt-64 items-center w-full h-full gap-10">
            <div className="">
                <img src={Logo} alt="" className='w-96' />
            </div>
            <div className="w-full flex justify-center">
                <div className={`w-1/3 bg-darkBG h-12 items-center flex rounded-full ${inputFocused ? 'border border-myBorder' : ''} hover:border-myBorder hover:border`}>
                    <form onSubmit={searchData} className='w-full flex items-center justify-center'>
                        <input
                            type="text"
                            value={input}
                            className='w-full ml-5 hover:outline-none focus:outline-none text-lg'
                            onChange={(e) => setInput(e.target.value)}
                            onFocus={() => setInputFocused(true)}
                            onBlur={() => setInputFocused(false)}
                            placeholder='Search something on HUSHH Search Engine!!'
                        />
                        <button type='submit'>
                            <svg fill="none" strokeWidth={1.5} stroke="" className='stroke-black hover:stroke-myBorder w-6 h-6 mr-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar