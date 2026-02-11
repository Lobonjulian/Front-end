const CategoryCard = ({ icon, title }) => {
  return (
    <article>
      <i className="w-full h-72 object-cover transition duration-500 group-hover:scale-110">
        {icon}
      </i>

      <div className="flex items-end pb-6">
        <h3 className="text-xl">{title}</h3>
      </div>
    </article>
  );
};

export default CategoryCard;
