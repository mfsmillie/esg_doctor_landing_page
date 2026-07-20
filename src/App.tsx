import Header from './components/Header';
import Hero from './components/Hero';
import ObesityCare from './components/ObesityCare';
import WhatIsESG from './components/WhatIsESG';
import HowItWorks from './components/HowItWorks';
import WhyPatients from './components/WhyPatients';
import AfterProcedure from './components/AfterProcedure';
import IsItRight from './components/IsItRight';
import SafetyInfo from './components/SafetyInfo';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ObesityCare />
      <WhatIsESG />
      <HowItWorks />
      <WhyPatients />
      <AfterProcedure />
      <IsItRight />
      <SafetyInfo />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
