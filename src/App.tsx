import { Features } from './components/features';
import { Clients } from './components/clients';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';

function App() {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Clients />
      <Features />
    </main>
  );
}

export default App;
