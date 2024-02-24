import { DialogUser } from "@/components/dialog/dialog";
import { ShoppingCart } from "lucide-react";
import { DropdownMenuDemo } from "../menu/dropMenu";
import { useSession } from "next-auth/react";

export default function NavAuth(){
  const user = useSession()
  const isuser = user.data?.user?.email ? '' : 'hidden'
  return (
    <div className="flex gap-4 mx-10  items-center">
        <DialogUser Component={true} ComponentName='Register'/>
        <DialogUser Component={false} ComponentName='Login'/>
        
        <DropdownMenuDemo  isDisable={isuser}/>
        <div className="bg-white flex w-14 rounded-full h-11 hover:bg-black hover:text-white border-white border items-center justify-center">
          <ShoppingCart />
        </div>
    </div>
  )
}