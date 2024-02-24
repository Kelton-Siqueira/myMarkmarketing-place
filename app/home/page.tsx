
import { fakedados } from "@/components/componetHome/fakeDatas";
import HomeComponent from "@/components/home/HomeComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default async function Home() {
  
  return (
    <HomeComponent dados={fakedados} />
  )
}
