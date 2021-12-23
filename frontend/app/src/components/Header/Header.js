import React from 'react'
import { Link } from "react-router-dom";
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
//import useLocalStorage from '../../hooks/useLocalStorage';

export const Header = () => {
    /*
    const [username] = useLocalStorage("user");
    let headerClassName = "text-white bg-bluecity_dark body-font shadow-md"
    
    if(username === "Hans Heje"){
        const colors = ["red","green","blue","pink","purple","yellow"];
        headerClassName = "text-white bg-"+colors[Math.floor(Math.random() * colors.length)]+"-700  body-font shadow-md"
    }
    */
    return (
        <header className="text-white bg-bluecity_dark body-font shadow-md" >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-bluecity_dark p-2 bg-white rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">PrioTool</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-bluecity_dark	flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-white">Overview</Link>
                    <Link to="/products" className="mr-5 hover:text-white">Products</Link>
                    <Link to="/products/add" className="mr-5 hover:text-white">Add Products</Link>
                    <Link to="/repairs" className="mr-5 hover:text-white">Repairs</Link>
                    <Link to="/writeoffs" className="mr-5 hover:text-white">Write offs</Link>
                </nav>
                {/*Delete this -Hans username === "Hans Heje" ? <h1>I'M A FUCKING GOD</h1>: <></> */}
                <DropdownMenu />
            </div>
        </header>
    )
}
