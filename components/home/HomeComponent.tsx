'use client'
import ImageUploadPlaceHolder from "@/components/NewUploudsAdmin/imagesUploud";
import { dados } from "@/components/authUser/data";
import GridElements, { Elements } from "@/components/componetHome/GridElements";
import { fakedados } from "@/components/componetHome/fakeDatas";
import NavAuth from "@/components/navBar/autNav";
import { useState } from "react";
import { SidebarGlobal } from "../sidBar/SideBar";

export default  function HomeComponent({dados}:Elements) {
const [values, setValues] = useState('')
  return (
    <div className="h-screen overflow-x-hidden">
      <div className="">
        <div className="fixed z-20">
        <div className="flex w-screen  bg-neutral-400 justify-between items-center">
            <div className="flex text-2xl text-white font-extrabold mx-4">
                Logo<div className="text-black">Bar</div>
            </div>
            <div className="rounded-full w-96 ">
                <input onChange={(e) => setValues(e.target.value)} className="rounded-full w-96 outline-none py-1 px-4" type="text"/>
            </div>
             <NavAuth />
        </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-40 flex justify-start items-start">
          <aside className="w-40 z-20 fixed  h-screen"><SidebarGlobal /></aside>
        </div>
        <div className="flex justify-center my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 z-0">
            <GridElements values={values} dados={fakedados} />
          </div>
        </div>
      </div>
      
    </div>
  )
}
