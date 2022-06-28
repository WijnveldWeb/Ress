import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import '../../assets/scss/components/_footer.scss'

const Footer = () => {
    const { footer } = usePage().props

    return (
        <footer id="colophon" className="site-footer contactfooter flex flex-col">
            <div className="footer-background">
                <div className="e__w-100 flex justify-end items-start">
                    <div className="e__footer-contact">
                        <p className="footer-contact-title">
                            contact
                        </p>
                        <Link href="tel:+31 6 207 232">+31 6 207 232</Link>
                        <Link href="mailto:info@erwinwebsites.nl">info@erwinwebsites.nl</Link>
                    </div>
                </div>
                <div className="footer-legal container flex flex-wrap justify-between items-center">
                    <p className="e__w-33"><Link href="/">© 2022 - ErwinWebsites</Link></p>
                    <p className="e__w-33"><Link href="/privacybeleid">Privacy policy</Link></p>
                    <p className="e__w-33"><Link href="/contact/">Contactformulier</Link></p>
                </div>
            </div>
            <div className="footer-info">
                <div className="container flex justify-between items-center">
                    <p>{footer.footer_text}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388.39 290.75">

                        <title>Laag 3</title>
                        <g id="Laag_2" data-name="Laag 2">
                            <g id="Laag_3" data-name="Laag 3">
                                <path className="cls-1"
                                    d="M186.65,132.16l33.75,57.33h146l19.12-34.15s6.5-9,0-23.18c.4.4-72-120.77-72-120.77s-4.83-11-26-11.39H71.57L0,92.71H126.87L117.11,111l-41.88.82S59,132.56,59.37,146s15.45,34.16,15.45,34.16h52.46l10.57,18.71H11.39l69.94,91.9H282.56s23.23,0,37.06-21.15l24.8-40.66-167.12-.81-47.18-82.76,46-80.71h94.74l37.82,67.09Z" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </footer>
    )
}

export default Footer