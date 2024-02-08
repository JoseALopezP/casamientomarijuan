import { Photo } from "../../components/Photo";
import { Presentation } from "../../components/Presentation";
import { Invitation } from "../../components/Invitation";
import { Information } from "../../components/Information";
import { Schedule } from "../../components/Schedule";
import { Places } from "../../components/Places";
import { Gift } from "../../components/Gift";
import { Confirmation } from "../../components/Confirmation";


export default function Home({params}) {
  return (
    <main>
      <Presentation/>
      <Photo/>
      <Invitation/>
      <Information/>
      <Schedule dinner={params.dinner}/>
      <Places quant={params.guests}/>
      <Gift/>
      <Confirmation quantity={params.guests}/>
    </main>
  )
}
