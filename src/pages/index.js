import Head from 'next/head'
import Image from 'next/image'

import Section from '../components/Section';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Curtis J. Woods II</title>
        <meta name="description" content="The Portfolio of Curtis J. Woods II" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Intro */}
      <Section color={'bg-transparent'}>
        <Header />
      </Section>

      {/* About */}
      <Section color={'bg-blue-300'} height={'h-auto'}>
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
  )
}
