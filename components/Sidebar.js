import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <aside className="md:w-64 bg-gray-100 p-4 hidden md:block">
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/create-post">Create Post</Link></li>
          <li><Link href="/reading-list">Reading List</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
      
      <button 
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded shadow"
      >
        ☰
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-40 p-4"
          >
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>
            <ul className="mt-8 space-y-4">
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/create-post">Create Post</Link></li>
              <li><Link href="/reading-list">Reading List</Link></li>
              <li><Link href="/settings">Settings</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Sidebar;
