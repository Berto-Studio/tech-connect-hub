import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <ContactSection />
    </div>
    <Footer />
  </>
);

export default ContactPage;
