
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Contact Us"
        subtitle="Reach out to our team to discuss your marketing needs and how we can help your business grow"
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
