import { DialogUser } from "@/components/dialog/dialog";
import { ShoppingCart } from "lucide-react";

export default function NavAuth(){
  return (
    <div className="flex gap-3 mx-10 items-center ">
        <DialogUser Component={true} ComponentName='Register'/>
        <DialogUser Component={false} ComponentName='Login'/>
        <div className="bg-white flex w-14 rounded-full h-11 hover:bg-black hover:text-white border-white border items-center justify-center">
          <ShoppingCart />
        </div>
    </div>
  )
}