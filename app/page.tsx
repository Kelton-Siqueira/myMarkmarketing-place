import { fakedados } from "@/components/componetHome/fakeDatas";
import HomeComponent from "@/components/home/HomeComponent";

export default async function Home() {
  return (
    <HomeComponent dados={fakedados} />
  )
}
