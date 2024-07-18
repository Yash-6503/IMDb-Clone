import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';


const Header = () => {
    return (
        <div className='w-full px-20 flex bg-gray-300 dark:bg-gray-900 dark:text-white h-14 justify-between items-center'>
            <div className='flex gap-10 w-full '>
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
            </div>

            <Link href={'/'} className='Logo w-full flex justify-end'>
                <p className=' bg-amber-500 px-3 rounded-md text-black font-bold'>IMDb</p>
            </Link>
        </div>
    )
}

export default Header
