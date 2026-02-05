import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/contactus'; // Naya import
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Contact /> {/* Yahan add karein */}
      <Footer />
    </main>
  );
}