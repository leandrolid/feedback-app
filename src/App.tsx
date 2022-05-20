import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { Widget } from './components/Widget';

function App() {
  const cardsToRender = Array.from({ length: 7 });

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-auto-250 gap-4 w-full max-w-5xl mx-auto mt-6 px-6">
        {cardsToRender.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
      <Widget />
    </>
  );
}

export default App;
