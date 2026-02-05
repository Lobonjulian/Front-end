const CategoryItem = ({ iconName, title }) => {
  return (
    <div className="text-center">
      <div className="text-text-200 mb-4"><i name={iconName} /></div>
      <p className="text-xl font-semibold">{title}</p>
    </div>
  );
};

export default CategoryItem;
