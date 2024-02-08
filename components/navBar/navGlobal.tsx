'use client'
import NavAuth from "./autNav";
export default function NavBarGlobal(){
    return(
        
        <div className="flex w-screen  bg-neutral-400 justify-between items-center">
            <div className="flex text-2xl text-white font-extrabold mx-4">
                Logo<div className="text-black">Bar</div>
            </div>
            <div className="rounded-full w-96 ">
                <input className="rounded-full w-96 outline-none py-1 px-4" type="text"/>
            </div>
             <NavAuth />
        </div>
    )
}