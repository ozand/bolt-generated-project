import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const articles = [
    {
      id: 1,
      title: 'The Benefits of Cycling',
      tags: ['Cycling', 'Health'],
      author: { name: 'John Doe', avatar: '/avatar.jpg' },
      date: '2023-10-01',
      comments: 10,
      reactions: 20,
      readingTime: 5,
    },
    // Add more articles here
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
