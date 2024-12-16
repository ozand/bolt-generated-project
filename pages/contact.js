import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-2">Feel free to reach out to us at contact@cyclistblog.com.</p>
      </div>
      <Footer />
    </div>
  );
}
