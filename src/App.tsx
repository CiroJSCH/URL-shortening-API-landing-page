// Components
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Statistics from "@/components/Statistics";

type Props = {}

const App = (props: Props) => {
  return (
    <main className="font-poppins">
      <Statistics />
      <Cta />
      <Footer />
    </main>
  )
}

export default App