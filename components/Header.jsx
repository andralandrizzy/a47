'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/img/ao-logo.png'
import LogoW from '@/public/img/ao-logo-white.png'
import { usePathname } from 'next/navigation'
import profileDefault from '@/public/img/dfp.jpeg'
import ThemeToggler from "@/components/ThemeToggler";


const Header = () => {
    const pathName = usePathname()
    const navigation = [
        {
            id: 1,
            link: 'Home',
            href: '/',
        },
        {
            id: 2,
            link: 'About',
            href: '#about',
        },
        {
            id: 3,
            link: 'Services',
            href: '#services',
        },
        {
            id: 4,
            link: 'skills',
            href: '#skills',
        },
        {
            id: 5,
            link: 'Education',
            href: '#education',
        },
        {
            id: 6,
            link: 'Work',
            href: '#work',
        },
        {
            id: 7,
            link: 'Blog',
            href: '#blog',
        },
        {
            id: 8,
            link: 'Contact',
            href: '#contact',
        },
    ]
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-[1920px] flex flex-wrap items-center justify-between mx-auto p-6">
                <Link href={'/'} className="flex items-center">
                    <Image src={Logo} className="h-[35px] w-[100%] block dark:hidden p-0 m-0" alt="andral orelus Logo" />
                    <Image src={LogoW} className="h-[35px] w-[100%] hidden dark:block m-0 p-0" alt="andral orelus Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <ThemeToggler />
                    <button type="button" className="text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 
                    focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
                    dark:orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 
                    justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 
                    rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navigation.map(nav => (
                            <li key={nav.id}>
                                <Link href={nav.href} className={`${pathName === nav.href ? 'text-orange-500' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 
                            md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent 
                            dark:border-gray-700`}>{nav.link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Header