import React from 'react'
import Link from 'next/link';

const MenuItem = ({ title, address, Icon }) => {
    return (
        <Link href={address} className='flex items-center'>
            <Icon className="sm:hidden hover:text-amber-500" />
            <p className='uppercase hidden hover:text-amber-300 sm:inline-flex font-semibold'>{title}</p>
        </Link>
    )
}

export default MenuItem
