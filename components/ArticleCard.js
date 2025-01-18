import styles from './ArticleCard.module.css';

const ArticleCard = ({ article, onTagClick }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{article.title}</h2>
      <div className={styles.tags}>
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className={styles.tag}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.author}>
        <img 
          src={article.author.avatar} 
          alt={article.author.name} 
          className={styles.avatar}
        />
        <span>{article.author.name}</span>
        <span>{article.date}</span>
      </div>
      <div className={styles.stats}>
        <span>{article.comments} comments</span>
        <span>{article.reactions} reactions</span>
        <span>{article.readingTime} min read</span>
      </div>
    </div>
  );
};

export default ArticleCard;
