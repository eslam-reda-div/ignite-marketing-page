
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Privacy Policy"
        subtitle="Last Updated: May 1, 2023"
      />
      
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              IGNITE Marketing Agency ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              This privacy policy applies to all information collected through our website, as well as any related services, sales, marketing, or events (collectively, the "Services").
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Services, including:
            </p>
            <ul>
              <li>
                <strong>Personal identifiable information</strong>, such as name, postal address, email address, telephone number, or any other information that could be used to identify you.
              </li>
              <li>
                <strong>Non-personal identifiable information</strong>, such as browser type, IP address, device information, operating system, and website usage information.
              </li>
              <li>
                <strong>Information from third-party social media services</strong> when you connect with us or share our content on social media platforms.
              </li>
            </ul>
            
            <h2>3. How We Collect Your Information</h2>
            <p>
              We collect information from you when you:
            </p>
            <ul>
              <li>Visit our website or use our Services</li>
              <li>Register on our website or create an account</li>
              <li>Submit a contact or inquiry form</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in surveys, promotions, or contests</li>
              <li>Engage with us on social media</li>
              <li>Apply for a job with us</li>
            </ul>
            <p>
              We also collect information through cookies and similar technologies. Please see our Cookie Policy for more information.
            </p>
            
            <h2>4. How We Use Your Information</h2>
            <p>
              We use the information we collect about you for various purposes, including to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>5. Sharing Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Affiliated companies within our corporate family</li>
              <li>Third parties in connection with a merger, sale, or acquisition</li>
              <li>Law enforcement agencies, courts, or regulatory bodies when required by applicable laws</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
            
            <h2>6. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            
            <h2>7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify or update your personal data</li>
              <li>The right to erase your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided in the "Contact Us" section.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.
            </p>
            
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              IGNITE Marketing Agency<br />
              123 Marketing St<br />
              San Francisco, CA 94103<br />
              Email: privacy@ignitedigital.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
