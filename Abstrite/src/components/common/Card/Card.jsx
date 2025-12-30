import './Card.css'

const Card = ({ icon, title, description, linkText }) => {
  return (
    <article className="card">
      <div className="card__icon-container">
        <span className="card__icon">{icon}</span>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <a href="#" className="card__link">
          {linkText}
        </a>
      </div>
    </article>
  );
};

export default Card;
