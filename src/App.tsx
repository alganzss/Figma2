import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { OrganizationStructure } from './components/OrganizationStructure';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical assets and simulate loading time
    const preloadAssets = async () => {
      // Wait for document to be ready
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }
      
      // Minimum loading time for good UX (3.5 seconds)
      await new Promise(resolve => setTimeout(resolve, 3500));
      
      setIsLoading(false);
    };

    preloadAssets();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen"
        >
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <OrganizationStructure />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}