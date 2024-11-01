import { maseratipic6 } from './assets/images';
import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';

function App() {
  return (
    <section className=''>
      <div className='relative min-h-screen'>
        <div className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${maseratipic6})` }}
        />

        <div className="absolute inset-0 bg-black opacity-40" />

        <div className='relative z-10 min-h-screen'>
          <Header />
          <Hero />
        </div>
      </div>

      <div>
        <Models />
      </div>
    </section>
  );
}

export default App;
