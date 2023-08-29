import { Features } from './components/features';
import { Clients } from './components/clients';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';

function App() {
  return (
    <main className="mx-auto">
      <img src="clouds/cloud-top.svg" alt="" className="absolute -z-10" />
      <Navbar />
      <Hero />
      <Clients />
      <Features />
    </main>
  );
}

export default App;
