import { Photo } from "./components/Photo";
import { Presentation } from "./components/Presentation";
import { Invitation } from "./components/Invitation";
import { Information } from "./components/Information";
import { Schedule } from "./components/Schedule";
import { Gift } from "./components/Gift";

export default function Home() {
  return (
    <main>
      <Presentation/>
      <Photo/>
      <Invitation/>
      <Information/>
      <Schedule/>
      <Gift/>
    </main>
  )
}
