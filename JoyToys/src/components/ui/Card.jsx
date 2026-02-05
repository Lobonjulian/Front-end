const Card = ({ image, title, description }) => {
  return (
    <article className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-200">{description}</p>
      </div>
    </article>
  );
};

export default Card;
