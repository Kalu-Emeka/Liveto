import {ConnectButton} from '@suiet/wallet-kit';
function NavBar () {
    return (
        <>
            <div className="fixed w-full z-[1000] bg-[#1E1E1E] p-[5px] py-2 shadow-md">
                <nav className="flex justify-between items-center my-[10px] mx-10 h-10 pb-13 sm:mx-2 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-[50%] md:w-[50%] lg:w-[20%]">
                        <div className="flex justify-start self-center">
                            <a className="text-[27px] text-[#CC0808] font-bold sm:text-[20px] md:text-[22px] lg:text-[27px]" href="/"><img className="w-[80%]" src="/Images/Component 1.png" alt="" /></a>
                        </div>
                    </div>
                    <ul className="uls flex justify-center items-center space-x-5 text-white">
                        <li className="flex justify-center items-center sm:hidden md:hidden lg:flex"><img className="w-[20%]" src="/Images/Add.png" alt="" /> <a href="">Go Live</a></li>
                        <ConnectButton className='px-[10px] py-[10px] bg-[#C20505] rounded-md w-[100%] text-[14px] sm:w-full sm:text-[12px] md:text-[13px] lg:text-[14px]' />
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default NavBar
// className="bg-[#C20505] text-[15px] text-white px-[10px] py-[10px] rounded-md font-semibold w-full hover:bg-red-900"
