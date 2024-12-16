const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-lg font-bold">Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://github.com">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
