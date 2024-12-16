import { useState } from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="md:w-64 bg-gray-100 p-4 hidden md:block">
      <nav>
        <ul>
          <li><Link href="/dashboard" legacyBehavior><a>Dashboard</a></Link></li>
          <li><Link href="/create-post" legacyBehavior><a>Create Post</a></Link></li>
          <li><Link href="/reading-list" legacyBehavior><a>Reading List</a></Link></li>
          <li><Link href="/settings" legacyBehavior><a>Settings</a></Link></li>
        </ul>
      </nav>
      <Menu
        isOpen={isMenuOpen}
        onToggle={handleMenuToggle}
        customBurgerIcon={<div>☰</div>}
        customCrossIcon={<div>×</div>}
      >
        <ul>
          <li><Link href="/dashboard" legacyBehavior><a>Dashboard</a></Link></li>
          <li><Link href="/create-post" legacyBehavior><a>Create Post</a></Link></li>
          <li><Link href="/reading-list" legacyBehavior><a>Reading List</a></Link></li>
          <li><Link href="/settings" legacyBehavior><a>Settings</a></Link></li>
        </ul>
      </Menu>
    </aside>
  );
};

export default Sidebar;
