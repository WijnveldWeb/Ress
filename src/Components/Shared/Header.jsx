import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import defaultLogo from '../../assets/images/logo.png';
import '../../assets/scss/components/_header.scss'

const Header = () => {
    const { custom_logo } = usePage().props
    const { primary_menu } = usePage().props

    return (
        <>
            {/* <header className='nav py-3'>
                <div className="wrap container mx-auto px-3 flex flex-row justify-between items-center">
                    <Link href='/'>
                        <img src={custom_logo != null && custom_logo || defaultLogo} alt='site logo' className="logo" />
                    </Link>
                    <nav className='nav-menu'>
                        {primary_menu.map((link, index) =>
                            <Link href={link.link} key={index}>{link.name}</Link>
                        )}
                    </nav>
                </div>
            </header> */}
            <header id="masthead" className="site-header flex items-center">
                <nav id="site-navigation" className="main-navigation flex  justify-between items-center container">
                    <div className="site-branding" id="site_logo">
                        <Link href="/">
                            <p className="site-title">
                                ErwinWijnveld
                            </p>
                        </Link>
                    </div>
                    <button className='navicon' id="nav-icon2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="e__menu-container">
                        <ul className="nav">
                            {primary_menu.map((link, index) =>
                                <li>
                                    <Link href={link.link} key={index}>{link.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header