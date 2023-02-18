// Components
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import Statistics from '@/components/Statistics';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Shorten from '@/components/Shorten';

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <header className='px-5 py-8'>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Shorten />
        <Statistics />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default App;
