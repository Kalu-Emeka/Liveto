// import { N } from "ethers";
import { useState } from "react";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    const navigate = useNavigate();
    const { address, isConnecting} = useAccount();
    
    useEffect(() => {
        if (address && !isConnecting) {
          navigate('/reels');
        }
      }, [address, isConnecting, history]);
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 shadow-md">
                <nav className="flex justify-between items-center  my-[10px] mx-10 h-10 pb-13 sm:mx-5 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="flex justify-start self-center">
                            <a className="text-[27px] text-[#CC0808] font-bold" href="/">BITREEL</a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] space-x-5 text-white sm:hidden md:hidden lg:flex">
                        {/* <button className="bg-[#CC0808] hover:bg-[#CC0740] px-[7px] py-[10px] text-[15px] rounded-xl" type="button">Connect wallet</button> */}
                        <button onClick={navigate}><w3m-button/></button>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="/">Home</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="">Services</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="">Skills</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="">Projects</a></li>
                            <li className=""><a className='hover:text-[#ff014f] font-medium' onClick={showNav}  href="#contact">Contact</a></li>
                        </ul>
                        <div className="flex p-[10px] ml-12 w-[40%] mr-4 rounded-md text-[13px] hover:bg-[#ff014f] hover:text-white bg-[#878e99] sm:w-[50%]">
                            <a href="https://www.resume.com/dashboard/resume/a1dbbd70-42a3-43fb-b7ba-18b37407ed87" target="_blank" rel="noopener noreferrer"><button type="button">Download Resume</button></a>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar