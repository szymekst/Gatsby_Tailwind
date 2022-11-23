import React from 'react'
import { Link } from 'gatsby'
import Logo from '...' // Logo Path

export const Header = () => {
    const linkStyles = {
        className: 'text-gray-300 hover:text-orange',
        activeClassName: 'text-black-100 hover:text-black-100',
        submenuActiveClassName: 'text-black-100 underline hover:text-orange',
    }

    const navLinks = [
        {
        className: linkStyles.className,
        activeClassName: linkStyles.activeClassName,
        title: 'Item 1',
        to: '',
        submenu: [
            {
            className: linkStyles.submenuActiveClassName,
            title: 'subItem 1',
            to: '/',
            },
        ],
        },
        {
        className: linkStyles.className,
        activeClassName: linkStyles.activeClassName,
        title: 'Item 2',
        to: '/',
        },
        {
        className: linkStyles.className,
        activeClassName: linkStyles.activeClassName,
        title: 'Item 3',
        to: '/',
        },
    ]

    return (
        <header className='w-full absolute z-10'>
        <div className='container py-11 flex justify-between'>
            <div className='logo'>
            <Link to="/">
                <img src={Logo} alt='vumo-logo'/>
            </Link>
            </div>
            <div>
            <nav>
                <ul className='flex gap-14'>
                {navLinks.map((navLink) => (
                    <li key={ navLink.title }>
                        <Link className={navLink.className} activeClassName={navLink.activeClassName} to={navLink.to}>
                        {navLink.title}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
            </div>
        </div>
        </header>
    )
}