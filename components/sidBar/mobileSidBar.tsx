'use client'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { AlignJustify } from "lucide-react"
import { Button } from "../ui/button"

export function DialogDemo() {
    const [btls, setBtls] = useState(false)
  return (
    <div  className=" flex md:hidden  md:bg-white z-20 w-60 overflow-hidden fixed  ">
        {
            btls ? (
                <div onClick={() => setBtls(false)} className={cn(" md:hidden w-96 relative z-30 ")}>
      <div className="space-y-4 py-2 bg-white border-2  w-52 flex items-start justify-center flex-col">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1 w-full">
            <Link href={""} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              IA Progamer
            </Link>
            <Link href={"/PagesUser/cardsElements"} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Web Videos
            </Link>
            <Link href={"/PagesUser/postsElements"} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
              Posts Students
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Library The API
          </h2>
          <div className="space-y-1  w-full">
            <Link href={"/PagesUser/IaImages"} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Generete images IA
            </Link>
            <Link href={"/PagesUser/ChatGenerate"} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              ChatGenerat
            </Link>
            <Link href={""} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Made for You
            </Link>
            <Link href={""} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              Artists
            </Link>
            <Link href={""} className="w-40 flex gap-2 items-center justify-start p-2 hover:bg-slate-500 hover:text-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              Albums
            </Link>
          </div>
        </div>
        <div className="py-2">
        </div>
      </div>
    </div>
            ) : <Button className="relative bg-zinc-400 my-[2.3rem]  w-20 mx-2 flex  items-center justify-center " onClick={() => setBtls(true)}><AlignJustify /></Button>
        }
    </div>
  )
}
