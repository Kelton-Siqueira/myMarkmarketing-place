'use client'
import CreateAccountForm from "@/components/authUser/createLoginForm";
import LoginForm from "@/components/authUser/loginUserForm";
import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Test(){
    const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  console.log(session, 'status')
    return(
        <LoginForm />
    )
}