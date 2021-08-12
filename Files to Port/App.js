import './App.css';
import Section from './components/Section';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='overflow-hidden'>
      {/* Intro */}
      <Section color={'bg-transparent'}>
        <Header />
      </Section>

      {/* About */}
      <Section color={'bg-blue-100'}>
        <About />
      </Section>

      {/* Skills */}
      <Section>
        <Skills />
      </Section>

      {/* Projects */}
      <Section color={'bg-blue-400'}>
        <Projects />
      </Section>

      {/* Contact */}
      <Section>
        <Contact />
      </Section>
    </div>

  );
}

export default App;
