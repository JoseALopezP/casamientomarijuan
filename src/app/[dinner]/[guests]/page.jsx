import { Photo } from "../../components/Photo";
import { Presentation } from "../../components/Presentation";
import { Invitation } from "../../components/Invitation";
import { Information } from "../../components/Information";
import { Schedule } from "../../components/Schedule";
import { Places } from "../../components/Places";
import { Gift } from "../../components/Gift";
import { Confirmation } from "../../components/Confirmation";
import { Carousel } from "@/app/components/Carousel";


export default function Home({params}) {
  return (
    <main>
      <Presentation/>
      <Photo/>
      <Invitation/>
      <Carousel/>
      <Information/>
      <Schedule dinner={params.dinner}/>
      <Places quant={params.guests}/>
      <Gift/>
      <Confirmation quantity={params.guests} dinner={params.dinner}/>
    </main>
  )
}
