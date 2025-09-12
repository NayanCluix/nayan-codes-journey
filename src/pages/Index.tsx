import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkHighlights from '@/components/WorkHighlights';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WorkHighlights />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
