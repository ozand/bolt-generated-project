const ArticleCard = ({ article, onTagClick }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{article.title}</h2>
      <div className="flex space-x-2 mt-2">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm text-blue-500 cursor-pointer"
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full" />
        <span>{article.author.name}</span>
        <span>{article.date}</span>
      </div>
      <div className="mt-2 flex space-x-4">
        <span>{article.comments} comments</span>
        <span>{article.reactions} reactions</span>
        <span>{article.readingTime} min read</span>
      </div>
    </div>
  );
};

export default ArticleCard;
