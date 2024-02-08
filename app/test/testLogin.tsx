'use client'
import CreateAccountForm from "@/components/authUser/createLoginForm";
import LoginForm from "@/components/authUser/loginUserForm";
import { useState } from "react";

export default function TestLogin(){
    const [isLogin, SetisLogin] = useState<boolean>(true)
    return(
        <LoginForm />
    )
}