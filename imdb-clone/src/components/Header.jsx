import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';


const Header = () => {
    return (
        <div className='w-full px-20 flex bg-gray-300 dark:bg-gray-900 dark:text-white h-14 justify-between items-center'>
            <div className='flex gap-10 w-full '>
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
            </div>

            <div className='flex gap-6 items-center'>
                <DarkModeToggle />
                <Link href={'/'} className='Logo w-full flex justify-end items-center gap-1 text-lg '>
                    <p className=' bg-amber-500 px-2 rounded-md text-black font-bold'>IMDb</p>
                    <p className='font-medium'>Clone</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
