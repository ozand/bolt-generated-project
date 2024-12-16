import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Article {id}</title>
        <meta name="description" content={`Content of article ${id}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Article {id}</h1>
        <p className="mt-2">This is the content of article {id}.</p>
      </div>
      <Footer />
    </div>
  );
}
