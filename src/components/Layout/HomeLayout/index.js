import About from "../../About";
import AboutLayout2 from "../../AboutLayout2";
import Appointment from "../../Appointment";
import Brand from "../../Brand";
import Feature from "../../Feature";
import Gallery from "../../Gllery";
import Pricing from "../../Pricing";
import Services from "../../Services";
import Team from "../../Team";
import Testimonial from "../../Testimonial";
import HeaderOnly from "../HeaderOnly";
import Footer from "../DefaultLayout/Footer";
import Hero from "../../Hero/Hero";
import Specality from "../../Specality/Specality";

function HomeLayout() {
  return (
    <>
      <HeaderOnly />
      <Hero />

      <Feature />
      <About />
      <Services />
      <Appointment />
      <AboutLayout2 />
      <Testimonial />
      <Brand />
      <Team />
      <Specality />
      <Gallery />
      <Pricing />
      <Footer />
    </>
  );
}

export default HomeLayout;
