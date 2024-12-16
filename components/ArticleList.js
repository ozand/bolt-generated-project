export default function ArticleList({ articles }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Featured Articles</h2>
      <ul className="list-disc pl-5 mt-2">
        {articles.map((article, index) => (
          <li key={index} className="mt-2">
            <a href={`/articles/${article.id}`} className="text-blue-500 hover:underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
