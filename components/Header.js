import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/reading-list">Reading List</Link></li>
            <li><Link href="/listings">Listings</Link></li>
            <li><Link href="/podcasts">Podcasts</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/tags">Tags</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <input type="text" placeholder="Search" className="border p-2 rounded" />
      </div>
    </header>
  );
};

export default Header;
