import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/ParisTrees png.png'
import { useLocation } from 'react-router-dom'

const Header = () => {
const location = useLocation();

    return (
        <header className="bg-custom-green-dark">
            <div className="container mx-auto">
                <section className="flex items-center justify-between">
                    <img src={logo} alt="Logo d'arbre de Paris" className="w-24" />
                    <ul className="flex mx-auto">
                        <li>
                            <Link
                                to="/accueil"
                                className={`px-4 py-2 rounded ${location.pathname === '/accueil' ? 'bg-custom-green' : 'bg-white'}`}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/map"
                                className={`px-4 py-2 rounded ${location.pathname === '/carte' ? 'bg-custom-green' : 'bg-white'}`}
                            >
                                Carte
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`px-4 py-2 rounded ${location.pathname === '/contact' ? 'bg-custom-green' : 'bg-white'}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </header>
    )
}

export default Header