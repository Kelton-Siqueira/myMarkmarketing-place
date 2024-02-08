'use client'
import CreateAccountForm from "@/components/authUser/createLoginForm";
import { useState } from "react";

export default function Test(){
    const [isLogin, SetisLogin] = useState<boolean>(true)
    return(
        <CreateAccountForm isLogin={isLogin} SetisLogin={SetisLogin} />
    )
}