import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-2">We are passionate about cycling and love to share our knowledge with the world.</p>
      </div>
      <Footer />
    </div>
  );
}
