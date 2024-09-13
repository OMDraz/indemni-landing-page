import './App.css';
import Slider from './components/Slider';
import BrandSlider from './components/BrandSlider';
import ServiceArea from './components/ServiceArea';
import ServiceSlider from './components/ServiceSlider';
import CollaborationArea from './components/CollaborationArea';
import RainbowCTA from './components/RanbowCTA';
import AdvanceTabArea from './components/AdvanceTabArea';
import PricingArea from './components/PricingArea';
import ServiceSpace from './components/ServiceSpace';
import Testimonials from './components/Testimonials';
import ReviewBrandArea from './components/ReviewBrandArea';
import CTAArea from './components/CTAArea';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>   
        <Header/>
        <Slider/>
        <BrandSlider/>
        <ServiceArea/>
        <PricingArea/>
        <ServiceSpace/>
        <Header/>
    </>
  );
}
