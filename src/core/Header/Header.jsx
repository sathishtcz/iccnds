import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setOpenMenu] = useState(null);
    const location = useLocation();
    const Active = location.pathname + location.hash;
    const mobileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileRef.current && !mobileRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const toggleMenu = (menu) => {
        setOpenMenu(isOpen === menu ? null : menu);
    };

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);


    return (
        <>
            <nav className={`fixed w-full top-0 z-50 transition-all duration-300  ${Active === "/" ? scrolled ? 'bg-indigo-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent' : "bg-indigo-900/95 backdrop-blur-md shadow-lg"}`}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-23">
                        <a href="/" className="flex items-center space-x-3">
                            <img alt="ICCNDS 2025 Logo" className="h-23 w-auto" src="/assets/images/logo1.png" />
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex space-x-10">
                            <Link to="/" className={`text-xl  transition duration-300 text-white  hover:text-yellow-500 ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

                            {/* About Dropdown */}
                            {/* <div className="relative group">
                                <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? 'text-yellow-400' : 'text-white hover:text-white'}`}>
                                    <span>About Us</span>
                                    <span className="text-sm">▼</span>
                                </button>
                                <div className="absolute hidden group-hover:block bg-indigo-900/95 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap ">
                                    <Link to="/about" className={`block px-4 py-2   hover:text-yellow-400 ${Active === "/about" ? " text-yellow-400" : "text-white" }`}>About the Conference</Link>
                                    <Link to="/scope" className={`block px-4 py-2   hover:text-yellow-400 ${Active === "/scope" ? " text-yellow-400" : "text-white" }`}>Scope of Conference</Link>
                                    <Link to="/organizingCommittee" className={`block px-4 py-2   hover:text-yellow-400 ${Active === "/organizingCommittee" ? " text-yellow-400" : "text-white" }`}>Technical Committee</Link>
                                    <Link to="/editorial" className={`block px-4 py-2   hover:text-yellow-400 ${Active === "/editorial" ? " text-yellow-400" : "text-white" }`}>Editorial Board</Link>
                                </div>
                            </div> */}

                            <div className="relative group">
                                <button
                                    className={`text-xl flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/about" || Active === "/scope" || Active === "/editorial#organizingCommittee" || Active === "/editorial" || Active === "/editorial#technical" || Active === "/editorial#advisory" ? "text-yellow-400" : "text-white hover:text-white"}`}>
                                    <span>About Us</span>
                                    <span className="text-sm">▼</span>
                                </button>

                                {/* Main Dropdown */}
                                <div className="absolute hidden group-hover:block bg-indigo-900/95 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap">
                                    <Link to="/about" className={`block px-4 py-2 hover:text-yellow-400 ${Active === "/about" ? "text-yellow-400" : "text-white"}`}>
                                        About the Conference
                                    </Link>
                                    <Link to="/scope" className={`block px-4 py-2 hover:text-yellow-400 ${Active === "/scope" ? "text-yellow-400" : "text-white"}`}>
                                        Scope of Conference
                                    </Link>

                                    {/* Editorial Board with Nested Dropdown */}
                                    <div className="relative group/editorial">
                                        <button className={`w-full text-left px-4 py-2 flex items-center justify-between hover:text-yellow-400 ${Active === "/editorial" || Active === "/editorial#organizingCommittee" || Active === "/editorial#technical" || Active === "/editorial#advisory" ? "text-yellow-400" : "text-white"}`}>
                                            Editorial Board
                                            <span className="text-xs ml-2">▶</span>
                                        </button>

                                        {/* Nested Dropdown */}
                                        <div className="absolute left-full top-0 hidden group-hover/editorial:block bg-indigo-800 shadow-lg rounded-md py-2 whitespace-nowrap">
                                            <Link to="/editorial#organizingCommittee" className={`block px-4 py-2 hover:text-yellow-400 ${Active === "/editorial#organizingCommittee" ? "text-yellow-400" : "text-white"}`}>
                                                Organizing Committee
                                            </Link>
                                            <Link to="/editorial#technical" className={`block px-4 py-2 hover:text-yellow-400 ${Active === "/editorial#technical" ? "text-yellow-400" : "text-white"}`}>
                                                Technical Committee
                                            </Link>
                                            <Link to="/editorial#advisory" className={`block px-4 py-2 hover:text-yellow-400 ${Active === "/editorial#advisory" ? "text-yellow-400" : "text-white"}`}>
                                                Advisory Committee
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Author's Desk Dropdown */}
                            <div className="relative group">
                                <button className={`text-xl  flex items-center space-x-2 text-white hover:text-yellow-500 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-400' : 'text-white hover:text-white'}`}>
                                    <span>Author's Desk</span>
                                    <span className="text-sm">▼</span>
                                </button>
                                <div className="absolute hidden group-hover:block bg-indigo-900/95 shadow-lg rounded-md pt-5 pb-3 whitespace-nowrap">
                                    <Link to="/conferenceTracks" className={`block px-4 py-2  hover:text-yellow-400 ${Active === "/conferenceTracks" ? "text-yellow-400" : "text-white"}`}>Conference Tracks</Link>
                                    <Link to="/important-dates" className={`block px-4 py-2  hover:text-yellow-400 ${Active === "/important-dates" ? "text-yellow-400" : "text-white"}`}>Key Dates</Link>
                                    <Link to="/paper-submission" className={`block px-4 py-2  hover:text-yellow-400 ${Active === "/paper-submission" ? "text-yellow-400" : "text-white"}`}>Paper Submission</Link>
                                </div>
                            </div>

                            {/* <Link to="/keyInvitees" className="text-2xl  text-white/80 hover:text-white">Key Invitees</Link> */}
                            <Link to="/contact" className={`text-xl   hover:text-yellow-500 ${Active === "/contact" ? "text-yellow-400 " : "text-white"}`}>Contact Us</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white focus:outline-none "
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed top-0 right-0 h-screen w-64 bg-indigo-900/95 text-white shadow-lg z-50 lg:hidden transition-transform" ref={mobileRef}>
                        {/* Close button */}
                        <button
                            className="absolute top-5 right-5 text-white cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col items-start mt-16 space-y-6 px-4">
                            <Link to="/" className={`text-lg  transition duration-300 text-white  hover:text-white ${Active === "/" ? " text-yellow-400" : "text-white"}`}>Home</Link>

                            {/* About Us Dropdown */}
                            <div className='group'>
                                <button className={`w-full text-left flex items-center space-x-2 ${Active === "/about" || Active === "/scope"  ? 'text-yellow-500' : 'text-white/80 '}`} onClick={() => toggleMenu('about')}>
                                    <span className='text-lg'>About Us</span>
                                    <span className="text-sm">{isOpen === "about" ? '▲' : '▼'}</span>
                                </button>
                                {isOpen === 'about' && (
                                    <div className="pl-4 whitespace-nowrap mt-2 text-lg  ">
                                        <a href="/about" className={`block py-1 text-white ${Active === "/about" ? "text-yellow-500 " : "text-white"}`}>About the Conference</a>
                                        <a href="/scope" className={`block py-1 text-white/90  ${Active === "/scope" ? "text-yellow-500 " : "text-white"}`}>Scope of the Conference</a>
                                        {/* <a href="/organizingCommittee" className={`block py-1 text-white/90 hover:text-white ${Active === "/organizingCommittee" ? "text-yellow-500 " : "text-white" }`}>Technical Committee</a> */}
                                        {/* <a href="/editorial" className={`block py-1 text-white/90 hover:text-white ${Active === "/editorial" ? "text-yellow-500 " : "text-white"}`}>Editorial Board</a> */}
                                    </div>
                                )}
                            </div>

                            {/* editorial */}
                            <div className='group'>
                                <button className={`w-full text-left flex items-center space-x-2 ${Active === "/editorial" || Active === "/editorial#technical" || Active === "/editorial#organizingCommittee" || Active === "/editorial#advisory" ? 'text-yellow-500' : 'text-white/80 '}`} onClick={() => toggleMenu('editorial')}>
                                    <span className='text-lg'>Editorial Board</span>
                                    <span className="text-sm">{isOpen === "editorial" ? '▲' : '▼'}</span>
                                </button>
                                {isOpen === 'editorial' && (
                                    <div className="pl-4 whitespace-nowrap mt-2 text-lg  ">
                                        <a href="/editorial#organizingCommittee" className={`block py-1 text-white ${Active === "/editorial#organizingCommittee" ? "text-yellow-500 " : "text-white"}`}>Organizing Committee</a>
                                        <a href="/editorial#technical" className={`block py-1 text-white/90  ${Active === "/editorial#technical" ? "text-yellow-500 " : "text-white"}`}>Technical Committee</a>
                                        <a href="/editorial#advisory" className={`block py-1 text-white/90  ${Active === "/editorial#advisory" ? "text-yellow-500 " : "text-white" }`}>Advisory Committee</a>
                                    </div>
                                )}
                            </div>


                            {/* Author's Desk Dropdown */}
                            <div className='group'>
                                <button className={`w-full text-left flex items-center space-x-2 ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-yellow-500' : 'text-white/80 '}`} onClick={() => toggleMenu('author')}>
                                    <span className='text-lg'>Author's Desk</span>
                                    <span className="text-sm">{isOpen === "author" ? '▲' : '▼'}</span>
                                </button>
                                {isOpen === 'author' && (
                                    <div className="pl-4 mt-2 text-lg ">
                                        <a href="/conferenceTracks" className={`block py-1 text-white/90  ${Active === "/conferenceTracks" ? "text-yellow-500 " : "text-white"}`}>Conference Tracks</a>
                                        <a href="/important-dates" className={`block py-1 text-white/90  ${Active === "/important-dates" ? "text-yellow-500 " : "text-white"}`}>Key Dates</a>
                                        <a href="/paper-submission" className={`block py-1 text-white/90  ${Active === "/paper-submission" ? "text-yellow-500 " : "text-white"}`}>Paper Submission</a>
                                    </div>
                                )}
                            </div>

                            {/* <Link to="/keyInvitees" className="text-lg  text-white/90 hover:text-white">Key Invitees</Link> */}
                            <a href="/contact" className={`text-lg  text-white hover:text-white ${Active === "/contact" ? "text-yellow-500 " : "text-white"}`}>Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header