
import { fakedados } from "@/components/componetHome/fakeDatas";
import HomeComponent from "@/components/home/HomeComponent";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
export default async function Home() {
  const user =  cookies().get('next-auth.session-token')
  console.log(user === undefined, 'user')
   if(user === undefined){
    console.log('redicet')
    redirect("/login", RedirectType.push)
   }


  return (
    <HomeComponent dados={fakedados} />
  )
}
