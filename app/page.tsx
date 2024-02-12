
import GridElements from "@/components/componetHome/GridElements";
import { fakedados } from "@/components/componetHome/fakeDatas";
import HomeComponent from "@/components/home/HomeComponent";
import { useStore } from "zustand";

export default async function Home() {
  return (
    <HomeComponent dados={fakedados} />
  )
}
