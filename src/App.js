import './App.css';
import Section from './components/Section';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div>
      {/* Intro */}
      <Section color={'bg-blue-400'}>
        <Header />
      </Section>

      {/* About */}
      <Section color={'bg-blue-100'}>
        <About />
      </Section>

      {/* Skills */}
      <Section>

      </Section>

      {/* Projects */}
      <Section>

      </Section>

      {/* Contact */}
      <Section>

      </Section>
    </div>

  );
}

export default App;
