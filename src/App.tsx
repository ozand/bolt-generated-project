import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <main className="container mx-auto pt-20 pb-8 px-4">
        <Outlet />
      </main>
    </div>
  );
}
