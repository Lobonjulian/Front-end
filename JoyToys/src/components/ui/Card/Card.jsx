const Card = ({ image, title, description }) => {
  return (
    <article className="flex flex-col gap-4">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-200 leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export default Card;
