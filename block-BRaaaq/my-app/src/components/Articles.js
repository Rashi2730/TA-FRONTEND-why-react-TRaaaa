import PropTypes from 'prop-types';
import articleData from './articles_json';

function Articles() {
  const articlesArr = articleData.map((obj, index) => (
    <Article
      author={obj.author}
      title={obj.title}
      description={obj.description}
      urlToImage={obj.urlToImage}
      url={obj.url}
      key={index.toString()}
    />
  ));
  return (
    <div className="articles flex justify-space-between">{articlesArr}</div>
  );
}

function Article(props) {
  return (
    <div className="article">
      <div className="article-feature-image">
        <img src={props.urlToImage} alt="" />
      </div>
      <div className="article-content flex flex-col justify-space-between">
        <h3 className="article-title">
          <a href={props.url}>{props.title}</a>
        </h3>
        <p className="article-paragraph">
          {props.description.slice(0, 180) + '...'}
        </p>
        <div className="article-extra-info">
          <span className="author-name">By {props.author}</span>
        </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Articles;