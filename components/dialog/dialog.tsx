import Test from "@/app/test/pageTest";
import TestLogin from "@/app/test/testLogin";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactElement, ReactNode } from "react";
interface Islogin {
    ComponentName?:string;
    Component?: boolean;
}
export const  DialogUser = ({ ComponentName, Component} : Islogin ) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="m-2 hover:bg-black hover:text-white">{ComponentName}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
            {Component ? <Test /> : <TestLogin /> }
      </DialogContent>
    </Dialog>
  )
}
