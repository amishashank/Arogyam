import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import MedicineStoreSection from '../components/sections/MedicineStoreSection'
import FAQSection from '../components/sections/FAQSection'
import CurvedLine from '../components/animations/CurvedLine'
import Footer from '../components/common/Footer'

function HomePage() {
  return (
    <>
      <HeroSection />
      <CurvedLine />
      <AboutSection />
      <CurvedLine />
      <FeaturesSection />
      <CurvedLine />
      <MedicineStoreSection />
      <CurvedLine />
      <FAQSection />
      <Footer />
    </>
  )
}

export default HomePage
