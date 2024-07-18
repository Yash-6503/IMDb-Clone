"use client";

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useTheme } from 'next-themes';

import React from 'react'

const DarkModeToggle = () => {

    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {
                currentTheme === 'dark' ?
                    <MdLightMode onClick={() => setTheme('light')} className='cursor-pointer text-xl hover:text-amber-500' /> :
                    <MdDarkMode onClick={() => setTheme('dark')} className='cursor-pointer text-xl hover:text-amber-500' />
            }
        </div>
    )
}

export default DarkModeToggle;
