import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "./components/SEOHead";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Marquee from "./components/Marquee";
import Benchmark from "./components/Benchmark";
import Pipeline from "./components/Pipeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

interface AppProps {
  lang: "en" | "es";
}

function App({ lang }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    localStorage.setItem("vocals_language", lang);
  }, [lang, i18n]);

  return (
    <div className="min-h-screen">
      <SEOHead lang={lang} />
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <Pipeline />
      <Marquee />
      <Benchmark />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
