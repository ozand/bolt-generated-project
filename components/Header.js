import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">Logo</a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
            <li><Link href="/reading-list" legacyBehavior><a>Reading List</a></Link></li>
            <li><Link href="/listings" legacyBehavior><a>Listings</a></Link></li>
            <li><Link href="/podcasts" legacyBehavior><a>Podcasts</a></Link></li>
            <li><Link href="/videos" legacyBehavior><a>Videos</a></Link></li>
            <li><Link href="/tags" legacyBehavior><a>Tags</a></Link></li>
            <li><Link href="/faq" legacyBehavior><a>FAQ</a></Link></li>
            <li><Link href="/sponsors" legacyBehavior><a>Sponsors</a></Link></li>
            <li><Link href="/about" legacyBehavior><a>About</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
          </ul>
        </nav>
        <input type="text" placeholder="Search" className="border p-2 rounded" />
      </div>
    </header>
  );
};

export default Header;
