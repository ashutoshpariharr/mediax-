import Hero from "./Pages/Home";
import Footer from "./Pages/Footer";
import Courses from "./Pages/Courses";
import Navbar from "./Components/Navbar";
import FAQSection from "./Pages/FAQSection";
import CampusSlider from "./Components/CampusSlider";
import StatsSection from "./Components/StatsSection";
import Testimonials from "./Components/Testimonials";
import AdmissionForm from "./Components/AdmissionForm";
import RecruitersShowcase from "./Components/RecruitersShowcase";

import "./App.css";

const App = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="recruiters">
          <RecruitersShowcase />
        </section>
        <section id="admissions">
          <AdmissionForm />
        </section>
        <section id="success">
          <Testimonials />
        </section>
        <section id="campus">
          <CampusSlider />
        </section>
        <section id="faq">
          <div className="mb-[5rem]">
            <FAQSection />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
