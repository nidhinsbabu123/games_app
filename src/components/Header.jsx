import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.jpg'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { ThemeContext } from '../context/ThemeContext';

function Header() {

    const[toggle,setToggle] = useState(true)

    const{theme,setTheme} = useContext(ThemeContext)

    useEffect(()=>{
        console.log('Theme : ',theme);
    },[])


    return (
        <div>

            <div className='flex items-center p-3'>

                <img src={logo} width={60} height={60} />
                <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
                    <HiMiniMagnifyingGlass />
                    <input type="text" className='px-2 bg-transparent outline-none' placeholder='Search Games'/>
                </div>

                <div>

                    {
                        theme=='light' ? 
                            (<IoMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}/>) : 
                            
                            (<LuSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}/>)
                            
                    }

                    
                    
                </div>

            </div>

        </div>
    )
}

export default Header